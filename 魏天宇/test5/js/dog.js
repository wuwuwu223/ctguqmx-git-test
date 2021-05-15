function init() {
    const map = document.querySelector('.map')
    const spriteContainer = document.querySelector('.sprite_container')
    const instruction = document.querySelector('.instruction')
    const sprite = document.querySelector('.sprite')
    const motionSpeed = 150
    const height = 10
    const width = 20
    const delay = 20
    let cellSize = 40
    let spritePos = -cellSize
    let x = 0
    let y = 0
    let instructionTimer
    let motionTimer
    let displayTimer
    let boneTimer
    let start = 42
    let goal = 0
    let carryOn = true
    let triedAnotherWay = false
    let route = []
    let happy
    let happyFrame = 10

    const cellsWithWalls = [
        31, 45, 69, 68, 71, 73, 82, 83, 85, 88, 91, 94, 95, 96, 98, 105, 110, 111, 112, 123, 125, 128, 137, 141, 142, 143, 145, 146, 154, 156, 157, 171
    ]

    const bone = `
    <svg class ="bone" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 151.9 151.9" >
    <style type="text/css">
    .st0{fill:#FFFFFF;}
    </style>
    <polygon class="st0" points="39.2,53.7 44.6,56.9 50.4,62.3 102.8,62.3 106.4,59.3 111.2,53.7 120.8,53.7 125.3,58 130.4,63.8 
    130.4,67.2 125.1,73.2 120.6,77.3 124.8,81.5 130.4,86.5 130.4,91.6 125.9,95.7 120.8,100.4 111.4,100.4 106.9,96.3 101.9,91.6 
    50,91.4 45.9,95.7 40.8,100.4 30.9,100.4 26.4,96.3 21.7,91.2 21.7,86.7 26.4,82.2 30.9,77.1 26.4,72.5 21.7,67.2 21.7,63.2 
    27,58.1 30.7,53.7 "/>
    <g>
    <g>
      <g>
        <path d="M24.1,70.2c-1.6,0-3.1,0-4.7,0c0-3.2,0-6.3,0-9.5c1.6,0,3.1,0,4.7,0c0-1.6,0-3.2,0-4.7c1.5,0,3,0,4.5,0c0-1.5,0-3,0-4.5
          c4.8,0,9.5,0,14.3,0c0,1.5,0,2.9,0,4.5c1.6,0,3.2,0,4.8,0c0,1.6,0,3.2,0,4.7c18.9,0,37.7,0,56.5,0c0-1.6,0-3.1,0-4.7
          c1.6,0,3.2,0,4.8,0c0-1.5,0-3,0-4.5c4.7,0,9.4,0,14.1,0c0,1.5,0,3,0,4.5c1.6,0,3.1,0,4.7,0c0,1.6,0,3.2,0,4.7c1.6,0,3.2,0,4.8,0
          c0,3.2,0,6.4,0,9.6c-1.6,0-3.1,0-4.7,0c0,0,0,0,0,0c0-3.1,0-6.2,0-9.3c-1.6,0-3.1,0-4.7,0c0-1.6,0-3.1,0-4.7c-4.7,0-9.4,0-14.1,0
          c0,1.6,0,3.1,0,4.7c-1.6,0-3.2,0-4.8,0c0,1.6,0,3,0,4.5c-18.9,0-37.7,0-56.5,0c0-1.5,0-3,0-4.5c-1.6,0-3.2,0-4.8,0
          c0-1.6,0-3.2,0-4.7c-4.7,0-9.4,0-14,0c0,1.5,0,3,0,4.6c-1.6,0-3.2,0-4.7,0C24.2,64,24.2,67.1,24.1,70.2
          C24.1,70.2,24.1,70.2,24.1,70.2z"/>
        <path d="M127.9,93.8c0,1.6,0,3.1,0,4.7c-1.6,0-3.1,0-4.8,0c0,1.6,0,3.1,0,4.7c-4.7,0-9.3,0-14,0c0-1.6,0-3.1,0-4.7
          c-1.6,0-3.2,0-4.8,0c0-1.6,0-3.2,0-4.8c-18.9,0-37.7,0-56.5,0c0,1.6,0,3.1,0,4.7c-1.6,0-3.2,0-4.9,0c0,1.6,0,3.2,0,4.7
          c-4.7,0-9.3,0-14,0c-0.1-0.1-0.2-0.2-0.3-0.3c0-1.4,0-2.9,0-4.4c-1.5,0-3,0-4.6,0c0-1.6,0-3.2,0-4.7c0,0,0,0,0,0
          c1.6,0,3.1,0,4.7,0c0,1.6,0,3,0,4.6c4.7,0,9.3,0,14,0c0-1.5,0-3,0-4.7c1.6,0,3.2,0,4.8,0c0-1.6,0-3.1,0-4.6c18.9,0,37.7,0,56.5,0
          c0,1.5,0,3,0,4.6c1.6,0,3.2,0,4.8,0c0,1.7,0,3.2,0,4.7c4.7,0,9.3,0,14,0c0-1.5,0-3,0-4.5C124.8,93.8,126.3,93.8,127.9,93.8
          C127.9,93.8,127.9,93.8,127.9,93.8z"/>
        <path d="M24.1,93.8c-1.6,0-3.1,0-4.7,0c0-3.2,0-6.3,0-9.5c1.6,0,3.1,0,4.7,0c0-1.6,0-3.2,0-4.8c1.5,0,3,0,4.5,0c0-1.5,0-3,0-4.6
          c-1.5,0-3,0-4.5,0c0-1.6,0-3.2,0-4.7c0,0,0,0,0,0c1.6,0,3.1,0,4.7,0c0,1.6,0,3,0,4.6c1.5,0,3,0,4.2,0c0.3,0.2,0.4,0.2,0.4,0.2
          c0,1.7,0,3.2,0,4.8c-1.6,0-3.1,0-4.6,0c0,1.5,0,3,0,4.6c-1.6,0-3.2,0-4.7,0C24.2,87.6,24.2,90.7,24.1,93.8
          C24.1,93.8,24.1,93.8,24.1,93.8z"/>
        <path d="M127.9,70.2c0,1.6,0,3.1,0,4.7c-1.6,0-3.2,0-4.7,0c0,1.5,0,3,0,4.5c1.5,0,3.1,0,4.7,0c0,1.6,0,3.2,0,4.8
          c1.6,0,3.2,0,4.8,0c0,3.2,0,6.3,0,9.6c-1.6,0-3.1,0-4.7,0c0,0,0,0,0,0c0-3.1,0-6.2,0-9.3c-1.6,0-3.1,0-4.7,0c0-1.6,0-3.1,0-4.7
          c-1.6,0-3.2,0-4.7,0c0-1.6,0-3.2,0-4.9c1.5,0,3.1,0,4.7,0c0-1.7,0-3.1,0-4.7C124.8,70.1,126.3,70.1,127.9,70.2
          C127.9,70.2,127.9,70.2,127.9,70.2z"/>
      </g>
    </g>
    </g>
  </svg>
  `

    const searchMemory = new Array(height * width).fill('').map(() => {
        return {
            path: null,
            searched: false,
            prev: null
        }
    })

    const mapMap = () => {
        const mapArr = []
        for (let i = 0; i < (width * height); i++) {
            mapArr.push(i)
        }

        return mapArr.map((ele, i) => {
            const dataX = i % width
            const dataY = Math.floor(i / width)

            return `
        <div 
          class="map_tile"
          data-index=${i}
          data-x=${dataX}
          data-y=${dataY}
        >
        </div>  
      `
        }).join('')
    }

    map.innerHTML = mapMap()
    const mapTiles = document.querySelectorAll('.map_tile')

    const setX = num => {
        x = num
        spriteContainer.style.left = `${x}px`
    }

    const setY = num => {
        y = num
        spriteContainer.style.top = `${y}px`
    }

    const setSpritePos = num => {
        spritePos = num
        sprite.style.marginLeft = `${spritePos}px`
    }

    const positionSprite = pos => {
        const paraX = pos % width * cellSize
        const paraY = Math.floor(pos / width) * cellSize
        setX(paraX)
        setY(paraY)
    }

    const NoWall = pos => {
        return !mapTiles[pos].classList.contains('wall')
    }

    const setUpWalls = () => {
        cellsWithWalls.forEach(cell => {
            mapTiles[cell].classList.add('wall')
        })
        mapTiles.forEach(tile => {
            if (tile.dataset.y === '0' ||
                tile.dataset.y === '9' ||
                tile.dataset.x === '0' ||
                tile.dataset.x === '19') tile.classList.add('wall')
        })
    }

    const clearTiles = () => {
        mapTiles[goal].innerHTML = ''
        mapTiles.forEach(tile => {
            tile.className = 'map_tile'
        })
        setUpWalls()
    }

    const spriteWalk = e => {
        if (!e) return

        const direction = e.key ? e.key.toLowerCase().replace('arrow', '') : e
        const current = (x / cellSize) + ((y / cellSize) * width)
        let m = -cellSize
        switch (direction) {
            case 'right':
                if (x < ((width - 1) * cellSize) && NoWall(current + 1)) setX(x + cellSize)
                m = spritePos === m * 8 ? m * 9 : m * 8
                break
            case 'left':
                if (x > 0 && NoWall(current - 1)) setX(x - cellSize)
                m = spritePos === m * 6 ? m * 7 : m * 6
                break
            case 'up':
                if (y > 0 && NoWall(current - width)) setY(y - cellSize)
                m = spritePos === m * 3 ? m * 5 : m * 3
                break
            case 'down':
                if (y < ((height - 1) * cellSize) && NoWall(current + width)) setY(y + cellSize)
                m = spritePos === m * 0 ? m * 2 : m * 0
                break
            default:
                console.log('invalid command')
        }
        setSpritePos(m)
        start = (x / cellSize) + ((y / cellSize) * width)
        if (goal === (x / cellSize) + ((y / cellSize) * width)) {
            boneTimer = setTimeout(() => {
                mapTiles[goal].innerHTML = ''
                animateHappyDog()
            }, 100)
        }
    }

    const chainMotion = (instruction, index) => {
        if (index >= instruction.length) return

        spriteWalk(instruction[index])
        motionTimer = setTimeout(() => {
            chainMotion(instruction, index + 1)
        }, motionSpeed)
    }

    const displayPath = current => {
        searchMemory[current].path = 'path'
        mapTiles[current].classList.add('path')
        let prev = searchMemory[current].prev

        //! when sprite is one square away from start and prev is undefined, prev is corrected.
        if (current - width === start ||
            current + width === start ||
            current - 1 === start ||
            current + 1 === start) prev = start

        let direction
        if (current - width === prev) direction = 'down'
        if (current + width === prev) direction = 'up'
        if (current - 1 === prev) direction = 'right'
        if (current + 1 === prev) direction = 'left'

        if (prev) route.push(direction)

        if (!prev) {
            route.push('reset')
            return
        }

        if (prev === start || !prev) {
            const reversedRoute = route.reverse()
            chainMotion(reversedRoute, 0)
            return
        }

        displayTimer = setTimeout(() => {
            displayPath(prev)
        }, delay)
    }

    const distanceBetween = (a, b) => {
        return Math.abs(a % width - b % width) + Math.abs(Math.floor(a / width) - Math.floor(b / width))
    }

    const decideNextMove = (current, count) => {
        if (!carryOn) return
        const possibleDestination = [
            current + 1,
            current - 1,
            current - width,
            current + width
        ]
        const mapInfo = []
        if (possibleDestination.filter(cell => cell === goal).length === 1) {
            carryOn = false
            searchMemory[goal].prev = current
            displayPath(goal)
            return
        }
        possibleDestination.forEach(option => {
            if (mapTiles[option] &&
                !mapTiles[option].classList.contains('wall') &&
                !searchMemory[option].searched &&
                option !== start) {
                mapInfo.push({
                    cell: option,
                    prev: current,
                    distanceFromStart: distanceBetween(start, option),
                    distanceToGoal: distanceBetween(goal, option)
                })
            }
        })
        const minValue = Math.min(...mapInfo.map(cell => cell.distanceFromStart + cell.distanceToGoal))
        const optionsWithMinValue = mapInfo.filter(cell => (cell.distanceFromStart + cell.distanceToGoal) === minValue)

        mapInfo.filter(cell => (cell.distanceFromStart + cell.distanceToGoal) !== minValue).forEach(option => {
            mapTiles[option.cell].classList.add('sub_node')
        })

        if (optionsWithMinValue.length === 0 && !triedAnotherWay) {
            triedAnotherWay = true
            tryAnotherWay(count)
        }

        optionsWithMinValue.forEach(option => {
            searchMemory[option.cell].searched = true
            searchMemory[option.cell].prev = current
            mapTiles[option.cell].classList.add('node')
            setTimeout(() => {
                decideNextMove(option.cell, count + 1)
            }, delay)
        })
    }

    const tryAnotherWay = count => {
        if (!carryOn) return
        const possibleDestination = [
            start + 1,
            start - 1,
            start - width,
            start + width
        ]
        possibleDestination.forEach(path => {
            if (mapTiles[path] &&
                !searchMemory[path].searched &&
                !mapTiles[path].classList.contains('wall')) {
                decideNextMove(path, count + 1)
            }
        })
    }

    const resetMotion = () => {
        clearTimeout(motionTimer)
        clearTimeout(displayTimer)
        clearTimeout(boneTimer)
        clearInterval(happy)
        clearTiles()
        searchMemory.forEach(memory => {
            memory.path = null,
                memory.searched = false,
                memory.prev = null
        })
        route = []
        carryOn = true
        triedAnotherWay = false
    }

    const triggerMotion = e => {
        if (Number(e.target.dataset.index) === goal || !e.target.dataset.index) return
        instruction.classList.add('hide')
        clearTimeout(instructionTimer)
        instructionTimer = setTimeout(() => {
            instruction.classList.remove('hide')
        }, 5 * 1000)
        mapTiles[goal].innerHTML = ''
        goal = Number(e.target.dataset.index)
        if (mapTiles[goal].classList.contains('wall')) return
        resetMotion()
        mapTiles[start].classList.add('start')
        positionSprite(start)
        mapTiles[goal].classList.add('goal')
        mapTiles[goal].innerHTML = bone
        searchMemory[start].path = 'start'
        searchMemory[goal].path = 'goal'
        decideNextMove(start, 0)
    }

    const animateHappyDog = () => {
        happy = setInterval(() => {
            happyFrame = happyFrame === 10 ? 11 : 10
            setSpritePos(happyFrame * -cellSize)
        }, 150)
    }

    //! comment this bit out to enable keyboard control
    // window.addEventListener('keydown', spriteWalk)

    const resize = () => {
        const wrapper = document.querySelector('.wrapper')
        let pWidth = 800
        if (wrapper.offsetWidth < 800) {
            pWidth = wrapper.offsetWidth
        }
        cellSize = Math.floor(pWidth / 20)
        const mapCover = document.querySelector('.map_cover')

        //*resize sprite
        positionSprite(start)
        setSpritePos(-cellSize)
        sprite.style.height = `${cellSize}px`
        sprite.style.width = `${cellSize * 12}px`
        spriteContainer.style.height = `${cellSize}px`
        spriteContainer.style.width = `${cellSize}px`

        //* resize map
        map.style.width = `${pWidth}px`
        map.style.height = `${pWidth / 2}px`
        mapCover.style.width = `${pWidth}px`
        mapCover.style.height = `${pWidth / 2}px`
        mapCover.style.marginTop = `-${pWidth / 2}px`
        mapTiles.forEach(tile => {
            tile.style.width = `${pWidth / 20}px`
            tile.style.height = `${pWidth / 20}px`
        })
    }

    //*setup
    setUpWalls()
    positionSprite(start)
    mapTiles.forEach(mapTile => {
        mapTile.addEventListener('click', triggerMotion)
    })
    resize()
    window.addEventListener('resize', resize)
}

window.addEventListener('DOMContentLoaded', init)