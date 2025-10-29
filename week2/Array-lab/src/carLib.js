// {
//     "model": "Corolla",
//     "color": "Red",
//     "age": 3
// }

let carArray = []
let nextId = 1

function addOne(model, color, age) {
  if (!model || !color || !age) {
    return false
  }

  const newCar = {
    id: nextId++,
    model,
    color,
    age,
  }

  carArray.push(newCar)
  return newCar
}

function getAll() {
  return carArray
}

function findById(id) {
  const numericId = Number(id)
  const car = carArray.find((item) => item.id === numericId)
  return car || false
}

function updateOneById(id, updateData) {
  const car = findById(id)
  if (car) {
    if (updateData.model) car.model = updateData.model
    if (updateData.color) car.color = updateData.color
    if (updateData.age) car.age = updateData.age
    return car
  }
  return false
}

function deleteOneById(id) {
  const car = findById(id)
  if (car) {
    const initialLength = carArray.length
    carArray = carArray.filter((car) => car.id !== Number(id))
    return carArray.length < initialLength
  }
  return false
}

if (require.main === module) {
  let result = addOne('Corolla', 'Red', 3)
  console.log(result)
  result = addOne('Civic', 'Blue', 2)
  console.log(result)

  console.log('getAll called:', getAll())
  console.log('findById called:', findById(1))
  console.log(
    'updateOneById called:',
    updateOneById(1, { age: 4, color: 'Black' })
  )
  console.log('findById called after item is updated', findById(1))

  console.log('deleteOneById called:', deleteOneById(1))
  console.log('findById called after item deleted:', findById(1))
}

const Car = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
}

module.exports = Car
