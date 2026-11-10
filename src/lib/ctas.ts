export function ctasFor(pathname: string, search: string) {
  const intent = new URLSearchParams(search).get('intent')
  const partner = pathname.startsWith('/partners') || (pathname.startsWith('/contact') && intent === 'partner')
  const operations = pathname.startsWith('/operations') || (pathname.startsWith('/contact') && intent === 'operations')
  const call = 'Book a 15 minute call'
  if (partner) return { primary: { label: 'Talk partnership', to: '/contact?intent=partner' }, call }
  if (operations) return { primary: { label: 'Get a workflow audit', to: '/contact?intent=operations' }, call }
  return { primary: { label: 'Get a free feasibility check', to: '/contact?intent=feasibility' }, call }
}
