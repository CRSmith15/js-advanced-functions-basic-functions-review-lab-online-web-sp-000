// Your code here
function saturdayFun(activity = "roller-skate") {
  return (`This Saturday, I want to ${activity}!`)
}
saturdayFun()

function mondayWork(activity = "go to the office") {
  return (`This Monday, I will ${activity}.`)
}
mondayWork()

function wrapAdjective(highlight = "*") {
  return function(trait = "special"){
    return (`You are ${highlight}${trait}${highlight}!`)
  }
}

let calculator = {}
