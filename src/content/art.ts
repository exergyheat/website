function sunRow() {
  const cells = Array.from({ length: 26 }, () => ' ')
  for (const index of [2, 9, 16, 23]) cells[index] = '^'
  return cells.join('')
}

/** Flat roof building: solar on the roof, a miner inside, heat through the floors. */
export const buildingArt = [
  '____________________________',
  '|     ^    ^    ^    ^     |',
  '|__________________________|',
  '|                          |',
  '|       +----------+       |',
  '|       |  miner   |       |',
  '|       +----------+       |',
  '|        ~~~~~~~~~>        |',
  '|                          |',
  '|         occupied         |',
  '|__________________________|',
]

export const buildingLabel =
  'Schematic of a building. Solar sits on the roof, a bitcoin miner is inside, and heat moves through the occupied floors.'

/** Solar array sitting on a boiler, heat marked in the vessel. */
export const boilerArt = [
  sunRow(),
  '_____  _____  _____  _____',
  '|   |  |   |  |   |  |   |',
  '|___|  |___|  |___|  |___|',
  '|                        |',
  '|        ~~~~~~~~        |',
  '|         boiler         |',
  '|________________________|',
]

export const boilerLabel =
  'Schematic of a solar array tied into a boiler, with heat marked inside the vessel.'
