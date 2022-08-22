// 输入内容增加字体改变
fontSize = (function () {
    var sizes = []

    sizes[9] = 300
    sizes[11] = 270
    sizes[13] = 230
    sizes[20] = 200
    sizes[40] = 100

    var lowerBound = 9

    for (var i = 0; i < 9; i++) {
        sizes[i] = sizes[9]
    }

    for (var i = 9; i < sizes.length; i++) {
        if (sizes[i] === undefined) {
            for (var j = i + 1; sizes[j] === undefined; j++);

            var upperBound = j,
                range = upperBound - lowerBound,
                ratio = (i - lowerBound) / range

            sizes[i] = sizes[lowerBound] - ratio * (sizes[lowerBound] - sizes[upperBound])
        }
        else {
            lowerBound = i
        }
    }

    return function (length) {
        if (sizes[length]) {
            return sizes[length]
        }

        return sizes[sizes.length - 1]
    }
})()
var na = document.getElementsByClassName('regex-test');
var newValue

//校验规则长度增加字体逐渐变小
function scrollTestFont(th){
    var div = th.parentNode.parentNode
    var length = [...th.value].length

    div.style.fontSize = fontSize(length) + '%'

    th.style.width = .2 + "ch"

    if (th.scrollWidth > 0) {
        th.style.width = th.scrollWidth + "px"
    }
}

this.matches = []
this.matchIndicator = document.createElement('div')
this.matchIndicator.className = 'match indicator'
document.getElementById('valueTest').parentNode.appendChild(this.matchIndicator)

// 匹配字段的阴影指示
function positionIndicator(indicator, index, length) {
    var ch = document.getElementById('valueTest').ch || document.getElementById('valueTest').offsetWidth / document.getElementById('valueTest').value.length

    indicator.style.left = ch * index + 'px'
    indicator.style.left = index + 'ch'
    indicator.style.width = ch * length + 'px'
    indicator.style.width = length + 'ch'
}
// 校验规则的验证
function patternTest(ts){
    newValue = document.getElementById('patternTest').value
    var pattern = RegExp(newValue, 'g')
    isMatch = pattern.test(ts.value)
    ts.parentNode.parentNode.classList.add('invalid')

    pattern.lastIndex = 0
    if(isMatch){
        ts.parentNode.parentNode.classList.remove('invalid')
        var match

        while(match = pattern.exec(ts.value)){
            var matches = {
                index:  match.index,
                length: match[0].length,
                subpatterns: match
            }

            this.matches.push(matches)

            if (matches.length === 0){
                pattern.lastIndex++
            }
        }
    }else{
        ts.parentNode.parentNode.classList.add('invalid')
    }
    var div = ts.parentNode.parentNode
    var length = [...ts.value].length

    div.style.fontSize = fontSize(length) + '%'

    ts.style.width = .2 + "ch"

    if (ts.scrollWidth > 0) {
        ts.style.width = ts.scrollWidth + "px"
    }
    this.nextMatch()
}

// 默认常用的正则表达式
function patternTestChange(value){
    document.getElementById('patternTest').value = value
    scrollTestFont(document.getElementById('patternTest'))
    patternTest(document.getElementById('valueTest'))
    console.log("document.getElementById('patternTest').value", document.getElementById('patternTest').value)
}

function gotoMatch(index){
    if(!this.matches.length){
        this.matchIndicator.style.display = 'none'

        this.subpatterns = []
    } else {
        var match = this.matches[index]

        if (match){
            var before  = document.getElementById('valueTest').value.substr(0, match.index + 1)
                lineBreaks = (before.match(/\n|\r/g) || []).length
            this.positionIndicator(this.matchIndicator, match.index+lineBreaks, match.length)
            this.matchIndicator.style.display = ''
        } else{
            throw Error('Warning!!!')
        }
    }
}
// 下一个匹配
function nextMatch() {
    var matches = this.matches

    if (!('index' in matches) || matches.index < 0 || matches.index + 1 >= matches.length) {
        matches.index = -1
    }
    this.gotoMatch(++matches.index)
}
// 上一个匹配
function prevMatch() {
    var matches = this.matches

    if (!matches.index) {
        matches.index = matches.length
    }

    this.gotoMatch(--matches.index)
}