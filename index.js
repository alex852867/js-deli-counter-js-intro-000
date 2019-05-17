function takeANumber(katzDeliLine, name) {
  katzDeliline.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliline) {
  if (katzDeliline.length ===0) {
  return 'There is nobody waiting to be served!'
} else {
  return `Currently serving ${katzDeliLine.shift()}.`
}
}
function currentLine(katzDeliLine) {
  for (var i = 0; i < katzDeliLine.length; i++) {
    line.push (`${i+1}. ${line[i]}`)
}
      if (katzDeliLinel.length > 1) {
    return {`The line is currently: ${line}`
  } else {
    return 'The line is currently empty.'
  }
  }
