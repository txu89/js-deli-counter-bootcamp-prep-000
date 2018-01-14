function takeANumber(katzDeliLine, name) {
  for (let i = 0; i < katzDeliLine.length; i++) {
    if (katzDeliLine[i] === name) {
      return i + 1
    }
  }
}

function nowServing(katzDeliLine) {
  var personToServe
  if (katzDeliLine.length = 0) {
    return "There is nobody waiting to be serverd!"
  } else {
    personToServe = katzDeliLine[0]
    katzDeliLine.shift()
    return personToServe
  }
}