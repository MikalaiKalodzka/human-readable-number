module.exports = function toReadable (number) {
  const str_num = String(number)
    const str_length = str_num.length
    if (str_length === 1) {
        return switchOnes(number)
    }
    if (str_length === 2) {
        return tensAndOnes(str_num)
    }
    if (str_length === 3) {
        return hundreds(str_num)
    }
}


function hundreds(str_num) {
    if (str_num.slice(1) != '00') {
        return switchOnes(str_num[0]) + ' hundred ' + tensAndOnes(str_num.slice(1))
    } else {
        return switchOnes(str_num[0]) + ' hundred'
    }
}


function switchOnes(number){
    switch (parseInt(number)) {
        case 0:
          return 'zero'
        case 1:
          return 'one'
        case 2:
          return 'two'
        case 3:
          return 'three'
        case 4:
          return 'four'
        case 5:
          return 'five'
        case 6:
          return 'six'
        case 7:
          return 'seven'
        case 8:
          return 'eight'
        case 9:
          return 'nine'
        default:
          return number
    }
}

function switchFromElevenToNineteen(number){
    switch (parseInt(number)) {
        case 0:
          return 'ten'
        case 1:
          return 'eleven'
        case 2:
          return 'twelve'
        case 3:
          return 'thirteen'
        case 4:
          return 'fourteen'
        case 5:
          return 'fifteen'
        case 6:
          return 'sixteen'
        case 7:
          return 'seventeen'
        case 8:
          return 'eighteen'
        case 9:
          return 'nineteen'
        default:
          return number
    }
}


function switchTens(number){
    switch (parseInt(number)) {
        case 0:
          return 'something wrong'
        case 1:
          return 'ten'
        case 2:
          return 'twenty'
        case 3:
          return 'thirty'
        case 4:
          return 'forty'
        case 5:
          return 'fifty'
        case 6:
          return 'sixty'
        case 7:
          return 'seventy'
        case 8:
          return 'eighty'
        case 9:
          return 'ninety'
        default:
          return number
    }
}

function tensAndOnes (str_num) {
    const str_length = str_num.length
    if (str_num[0] === '0') {
        return switchOnes(str_num[1])
    } else if ((str_num[0] != '1') && (str_num[1] != '0')) {
        return switchTens(str_num[0]) + ' ' + switchOnes(str_num[1])
    } else if ((str_num[0] != '1') && (str_num[1] === '0')) {
        return switchTens(str_num[0])
    } else if (str_num[0] === '1') {
        return switchFromElevenToNineteen(str_num[1])
    } 
}
