import { StrictMode } from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { Writable } from 'node:stream'
import { StaticRouter } from 'react-router-dom/server'
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async'
import ErrorBoundary from './components/ErrorBoundary'
import { ThemeProvider } from './contexts/ThemeContext'
import { AppRoutes, Shell } from './App'

export function render(url: string): Promise<{ html: string; helmet: HelmetServerState }> {
  const helmetContext: { helmet?: HelmetServerState } = {}

  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    const sink = new Writable({
      write(chunk, _enc, cb) {
        chunks.push(Buffer.from(chunk))
        cb()
      },
      final(cb) {
        resolve({ html: Buffer.concat(chunks).toString('utf8'), helmet: helmetContext.helmet! })
        cb()
      },
    })

    const stream = renderToPipeableStream(
      <StrictMode>
        <HelmetProvider context={helmetContext}>
          <ThemeProvider>
            <StaticRouter location={url}>
              <Shell>
                <ErrorBoundary>
                  <AppRoutes />
                </ErrorBoundary>
              </Shell>
            </StaticRouter>
          </ThemeProvider>
        </HelmetProvider>
      </StrictMode>,
      {
        onAllReady() {
          stream.pipe(sink)
        },
        onError(err) {
          reject(err)
        },
      },
    )
  })
}
