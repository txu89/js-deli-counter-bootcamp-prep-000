function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  var personToServe
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be serverd!"
  } else {
    personToServe = katzDeliLine[0]
    katzDeliLine.shift()
    return personToServe
  }
}

function currentLine(katzDeliLine) {
  var line = "The line is currently: " 
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (let i = 1; i < katzDeliLine.length - 1; i++) {
      line += `${i + 1}. ${katzDeliLine[i]}, `
    }
    line += `${i + 1}. ${katzDeliLine[i]}.`
  }
}