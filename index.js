

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}
var line = []
function currentLine(katzDeliLine) {
  for (var i = 0; i < katzDeliLine.length; i++) {
    line.push (`${i+1}. ${katzDeliLine[i]}, `)
}
      if (katzDeliLine.length > 1) {
    return `The line is currently: ${line}`
  } else {
    return 'The line is currently empty.'
  }
  }
