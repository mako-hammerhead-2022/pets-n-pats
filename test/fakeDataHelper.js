// Helper
export function makeTestAnimals(num) {
  return new Array(num)
    .fill({})
    .map((cell, i) => {
      return {
        id: i + 1,
        name: `Pet ${i + 1}`,
        imageUrl: '["https://wallpaperaccess.com/full/2378663.jpg"]',
        animal: (i + 1) % 2 ? 'cat' : 'dog',
        points: (i + 1) * 10,
      }
    })
    .reverse()
}
