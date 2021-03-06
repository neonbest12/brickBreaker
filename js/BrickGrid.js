class BrickGrid{
    constructor(level){
        this.level = level;
        this.rows = 12;
        this.columns = 10;
        this.bricks;
        this.brickArray;
        this.customBricks=[];
        this.initialInit();
        this.init();
    }
    initialInit(){
        var saved = JSON.parse(localStorage.getItem('customBricks'));
        if(saved){
            var mylength = (saved.length > totalCustomLevels +1 )? totalCustomLevels+1: saved.length; // Trim earlier saved levels if total<saved;
            for(let i =0; i<mylength; i++){
                this.customBricks.push(saved[i])
            }
            for(let i = 0; i<totalCustomLevels - saved.length +1; i++) this.customBricks.push([]);
        }
        else{
            log('hii')
            for(let i =0; i<=totalCustomLevels; i++) this.customBricks.push([]);
        }
    }
    init(){
        this.bricks =[];
        this.makeBrickArray();
        this.brickArray.forEach(
            (mybrick)=>{
                if(mybrick[1]){
                var row = parseInt(mybrick[0] / 10) ;
                var column = mybrick[0] % 10;
                var brik = new Brick(column*80, row*30, mybrick[1] || 1, this.getPower(mybrick[2]))
                this.bricks.push(brik);
                }
            }
        )
        // log(this.bricks);
    }

    getPower(code){
        switch(code){
            case 'ma': return new Magnet();
            case 'su': return new SpeedUp();
            case 'sd': return new SpeedDown();
            case 'bx': return new BallMultiplier();
            case 'sx': return new ScoreMultiplier();
            case 'ex': return new Expand();
            case 'sh': return new Shrink();
            case 'bu': return new BulletPower();
            case 'fi': return new FireBallPower();
            case 'ch': return new ChakraBallPower();
            case '__': return null;
            default: return null;
        }
    }

    setPower(power){
        if (!power) return '__';
        switch(power.constructor){
            case Magnet: return 'ma';
            case SpeedUp: return 'su';
            case SpeedDown: return 'sd';
            case BallMultiplier: return 'bx';
            case ScoreMultiplier: return 'sx';
            case Expand: return 'ex';
            case Shrink: return 'sh';
            case BulletPower: return 'bu';
            case FireBallPower: return 'fi';
            case ChakraBallPower: return 'ch';
            default: return null;
        }
    }

    makeCustomLevel(level=1){
        this.customBricks[level] =[]
        levelCreator.bricks.forEach(
            (brick,index)=>{
                this.customBricks[level].push([levelCreator.brickNumberArray[index], brick.damage, this.setPower(brick.power)])
            }
        )
    }

    makeBrickArray(){
        var nn='';
        if (this.level<1){this.brickArray = this.customBricks[Math.abs(this.level)]; return};
        switch(this.level){
            
            case 1:
                this.brickArray = [
    // [#0,1,'__'], [#1,1,'__'], [#2,1,'__'], [#3,1,'__'], [#4,1,'__'], [#5,1,'__'], [#6,1,'__'], [#7,1,'__'], [#8,1,'__'], [#9,1,'__'],
    [0, 1,'__'], [1, 1,'__'], [2, 1,'__'], [3, 2,'__'], [4, 1,'__'], [5, 1,'__'], [6, 2,'__'], [7, 1,'__'], [8, 1,'__'], [9, 1,'__'],
    [10,1,'__'], [11,1,'__'], [12,1,'__'], [13,2,'__'], [14,1,'__'], [15,1,'__'], [16,2,'__'], [17,1,'__'], [18,1,'__'], [19,1,'__'],
    [20,1,'__'], [21,1,'__'], [22,1,'__'], [23,2,'__'], [24,1,'__'], [25,1,'__'], [26,2,'__'], [27,1,'__'], [28,1,'__'], [29,1,'__'],
    [30,1,'__'], [31,1,'__'], [32,1,'sh'], [33,2,'__'], [34,1,'__'], [35,1,'__'], [36,2,'__'], [37,1,'__'], [38,1,'__'], [39,1,'__'],
    [40,1,'fi'], [41,1,'__'], [42,1,'__'], [43,2,'__'], [44,1,'__'], [45,1,'ma'], [46,2,'__'], [47,1,'__'], [48,1,'sx'], [49,1,'__'],
    [50,1,'__'], [51,1,'__'], [52,1,'su'], [53,2,'sd'], [54,1,"sd"], [55,1,'sd'], [56,2,'sd'], [57,1,'__'], [58,1,'__'], [59,1,'__'],
    [60,1,'__'], [61,1,'ch'], [62,1,'__'], [63,2,'ch'], [64,1,'ch'], [65,1,'su'], [66,2,'su'], [67,1,'su'], [68,1,'__'], [69,1,'__'],
    // [70,1,'__'], [71,1,'__'], [72,1,'__'], [73,1,'__'], [74,1,'__'], [75,1,'__'], [76,1,'__'], [77,1,'__'], [78,1,'__'], [79,1,'__'],
    // [80,1,'__'], [81,1,'__'], [82,1,'__'], [83,1,'__'], [84,1,'__'], [85,1,'__'], [86,1,'__'], [87,1,'__'], [88,1,'__'], [89,1,'__'],
    // [90,1,'__'], [91,1,'__'], [92,1,'__'], [93,1,'__'], [94,1,'__'], [95,1,'__'], [96,1,'__'], [97,1,'__'], [98,1,'__'], [99,1,'__'],

        ]
            break;

            case 3:
                this.brickArray = [
    // [#0,1,'__'], [#1,1,'__'], [#2,1,'__'], [#3,1,'__'], [#4,1,'__'], [#5,1,'__'], [#6,1,'__'], [#7,1,'__'], [#8,1,'__'], [#9,1,'__'],
    [0, 1,'__'], [1, 3,'__'], [2, 6,'__'], [3, 1,'__'], [4, 0,'__'], [5, 1,'__'], [6, 1,'__'], [7, 2,'__'], [8, 3,'__'], [9, 1,'__'],
    [10,2,'su'], [11,3,'__'], [12,1,'__'], [13,1,'__'], [14,1,'ex'], [15,1,'__'], [16,6,'bu'], [17,6,'__'], [18,1,'__'], [19,1,'__'],
    [20,1,'__'], [21,3,'__'], [22,1,'__'], [23,1,'__'], [24,1,'__'], [25,1,'__'], [26,1,'__'], [27,4,'sx'], [28,5,'__'], [29,1,'__'],
    [30,4,'__'], [31,3,'bu'], [32,6,'sx'], [33,1,'__'], [34,1,'__'], [35,6,'ch'], [36,5,'__'], [37,0,'__'], [38,1,'__'], [39,1,'sh'],
    [40,1,'__'], [41,3,'__'], [42,1,'__'], [43,6,'__'], [44,4,'__'], [45,1,'__'], [46,4,'__'], [47,1,'__'], [48,0,'__'], [49,1,'__'],
    [50,6,'__'], [51,3,'__'], [52,1,'__'], [53,2,'__'], [54,4,'__'], [55,1,'__'], [56,1,'__'], [57,1,'__'], [58,1,'__'], [59,3,'__'],
    [60,1,'__'], [61,1,'__'], [62,1,'__'], [63,2,'__'], [64,4,'__'], [65,0,'__'], [66,1,'__'], [67,1,'__'], [68,6,'ma'], [69,1,'__'],
    [70,4,'__'], [71,1,'__'], [72,6,'__'], [73,2,'bx'], [74,1,'__'], [75,4,'__'], [76,1,'sx'], [77,4,'__'], [78,1,'__'], [79,0,'__'],
    [80,3,'__'], [81,4,'ex'], [82,1,'__'], [83,2,'__'], [84,0,'__'], [85,1,'__'], [86,1,'__'], [87,1,'sh'], [88,1,'__'], [89,3,'__'],
    [90,1,'__'], [91,1,'__'], [92,1,'__'], [93,2,'__'], [94,1,'__'], [95,0,'__'], [96,1,'__'], [97,1,'__'], [98,2,'__'], [99,4,'bu'],

        ]
            break;

            case 2:
                this.brickArray = [
            // [#0,1,'__'], [#1,1,'__'], [#2,1,'__'], [#3,1,'__'], [#4,1,'__'], [#5,1,'__'], [#6,1,'__'], [#7,1,'__'], [#8,1,'__'], [#9,1,'__'],
            [0,1,'__'],  [1,1,'__'],  [2,2,'__'],  [3,1,'__'],  [4,1,'__'],  [5,1,'__'],  [6,1,'__'],  [7,1,'__'],  [8,1,'__'],  [9,1,'__'],
            [10,1,'__'], [11,1,'sx'], [12,4,'__'], [13,0,'__'], [14,1,'__'], [15,1,'__'], [16,6,'__'], [17,3,'fi'], [18,0,'__'], [19,1,'__'],
            // [20,1,'__'], [21,1,'__'], [22,1,'__'], [23,3,'__'], [24,1,'__'], [25,1,'__'], [26,1,'__'], [27,1,'__'], [28,1,'__'], [29,1,'__'],
            [30,5,'bu'], [31,2,'__'], [32,1,'__'], [33,6,'ex'], [34,1,'sh'], [35,1,'__'], [36,5,'__'], [37,3,'__'], [38,1,'ex'], [39,1,'__'],
            // [40,1,'__'], [41,1,'__'], [42,1,'__'], [43,1,'__'], [44,0,'__'], [45,1,'__'], [46,1,'__'], [47,1,'__'], [48,1,'__'], [49,1,'__'],
            [50,1,'__'], [51,1,'__'], [52,1,'__'], [53,1,'__'], [54,0,"__"], [55,1,'__'], [56,1,'__'], [57,4,'ma'], [58,1,'__'], [59,1,'__'],
            [60,1,'__'], [61,1,'__'], [62,2,'__'], [63,3,'__'], [64,1,'__'], [65,1,'sh'], [66,1,'__'], [67,0,'__'], [68,1,'__'], [69,3,'__'],
            // [70,1,'__'], [71,1,'__'], [72,1,'__'], [73,1,'__'], [74,1,'__'], [75,1,'__'], [76,1,'__'], [77,1,'__'], [78,1,'__'], [79,1,'__'],
            [80,1,'__'], [81,1,'sh'], [82,1,'__'], [83,1,'__'], [84,4,'__'], [85,5,'__'], [86,1,'__'], [87,1,'__'], [88,1,'__'], [89,1,'__'],
            [90,1,'__'], [91,0,'__'], [92,0,'__'], [93,1,'__'], [94,1,'__'], [95,0,'__'], [96,1,'__'], [97,2,'__'], [98,1,'__'], [99,2,'__'],

                ]
            break;

            case 4:
                this.brickArray = [
    // [#0,1,'__'], [#1,1,'__'], [#2,1,'__'], [#3,1,'__'], [#4,1,'__'], [#5,1,'__'], [#6,1,'__'], [#7,1,'__'], [#8,1,'__'], [#9,1,'__'],
    [0, 1,'__'], [1, 1,'__'], [2, 1,'__'], [3, 1,'__'], [4, 1,'ch'], [5, 1,'__'], [6, 1,'__'], [7, 1,'__'], [8, 1,'__'], [9, 1,'__'],
    [10,1,'__'], [11,2,'__'], [12,1,'__'], [13,1,'__'], [14,1,'__'], [15,0,'__'], [16,2,'__'], [17,0,'__'], [18,1,'__'], [19,0,'__'],
    [20,2,'su'], [21,1,'__'], [22,1,'__'], [23,2,'__'], [24,1,'__'], [25,1,'sx'], [26,1,'__'], [27,1,'__'], [28,1,'__'], [29,6,'ch'],
    [30,0,'__'], [31,0,'__'], [32,2,'__'], [33,1,'__'], [34,4,'__'], [35,2,'__'], [36,6,'bu'], [37,2,'__'], [38,1,'__'], [39,2,'__'],
    [40,2,'__'], [41,1,'__'], [42,1,'bu'], [43,4,'__'], [44,2,'__'], [45,3,'__'], [46,0,'__'], [47,1,'__'], [48,2,'fi'], [49,0,'__'],
    [50,1,'__'], [51,1,'__'], [52,0,'__'], [53,2,'__'], [54,1,'__'], [55,1,'__'], [56,1,'__'], [57,0,'__'], [58,1,'__'], [59,1,'__'],
    [60,1,'__'], [61,1,'__'], [62,3,'__'], [63,1,'sx'], [64,1,'__'], [65,0,'__'], [66,1,'__'], [67,1,'sd'], [68,1,'__'], [69,0,'__'],
    [70,0,'__'], [71,3,'su'], [72,1,'__'], [73,1,'__'], [74,6,'ex'], [75,3,'sh'], [76,0,'__'], [77,0,'__'], [78,0,'__'], [79,1,'__'],
    [80,1,'__'], [81,1,'__'], [82,1,'__'], [83,1,'__'], [84,1,'__'], [85,1,'__'], [86,1,'__'], [87,2,'__'], [88,1,'__'], [89,1,'__'],
    [90,1,'__'], [91,1,'__'], [92,2,'__'], [93,0,'__'], [94,6,'bx'], [95,2,'__'], [96,1,'__'], [97,1,'__'], [98,2,'__'], [99,1,'__'],

        ]
                break;

            default:
                this.brickArray = [
    // [#0,1,'__'], [#1,1,'__'], [#2,1,'__'], [#3,1,'__'], [#4,1,'__'], [#5,1,'__'], [#6,1,'__'], [#7,1,'__'], [#8,1,'__'], [#9,1,'__'],
    [0, 6,'__'], [1, 6,'__'], [2, 5,'__'], [3, 5,'__'], [4, 3,'__'], [5, 3,'__'], [6, 4,'__'], [7, 6,'__'], [8, 6,'__'], [9, 6,'__'],
    [10,6,'__'], [11,6,'__'], [12,5,'__'], [13,5,'__'], [14,3,'__'], [15,3,'__'], [16,4,'__'], [17,6,'__'], [18,6,'sx'], [19,6,'__'],
    [20,6,'__'], [21,6,'bx'], [22,5,'__'], [23,5,'__'], [24,3,'__'], [25,3,'sx'], [26,4,'__'], [27,6,'__'], [28,6,'__'], [29,6,'__'],
    [30,6,'__'], [31,6,'__'], [32,5,'sx'], [33,5,'ex'], [34,3,'__'], [35,3,'__'], [36,4,'__'], [37,6,'__'], [38,6,'__'], [39,6,'__'],
    [40,6,'__'], [41,6,'__'], [42,5,'__'], [43,5,'__'], [44,3,'__'], [45,3,'__'], [46,4,'ex'], [47,6,'__'], [48,6,'fi'], [49,6,'__'],
    [50,6,'__'], [51,6,'sh'], [52,5,'__'], [53,5,'__'], [54,3,'__'], [55,3,'__'], [56,4,'__'], [57,6,'__'], [58,6,'__'], [59,6,'bu'],
    [60,6,'__'], [61,6,'__'], [62,5,'__'], [63,5,'__'], [64,3,'sh'], [65,3,'__'], [66,4,'__'], [67,6,'__'], [68,6,'__'], [69,6,'__'],
    [70,6,'__'], [71,6,'__'], [72,5,'__'], [73,5,'sx'], [74,3,'__'], [75,3,'__'], [76,4,'__'], [77,6,'sx'], [78,6,'__'], [79,6,'__'],
    [80,6,'__'], [81,6,'__'], [82,5,'ma'], [83,5,'__'], [84,3,'__'], [85,3,'__'], [86,4,'__'], [87,6,'__'], [88,6,'__'], [89,6,'__'],
    [90,6,'bu'], [91,6,'__'], [92,5,'__'], [93,5,'__'], [94,3,'__'], [95,3,'sh'], [96,4,'__'], [97,6,'__'], [98,6,'__'], [99,6,'sh'],

        ]
        }
    }
    
}



//template

// this.brickArray = [
//     // [#0,1,'__'], [#1,1,'__'], [#2,1,'__'], [#3,1,'__'], [#4,1,'__'], [#5,1,'__'], [#6,1,'__'], [#7,1,'__'], [#8,1,'__'], [#9,1,'__'],
//     [0, 1,'__'], [1, 1,'__'], [2, 1,'__'], [3, 1,'__'], [4, 1,'__'], [5, 1,'__'], [6, 1,'__'], [7, 1,'__'], [8, 1,'__'], [9, 1,'__'],
//     [10,1,'__'], [11,1,'__'], [12,1,'__'], [13,1,'__'], [14,1,'__'], [15,1,'__'], [16,1,'__'], [17,1,'__'], [18,1,'__'], [19,1,'__'],
//     [20,1,'__'], [21,1,'__'], [22,1,'__'], [23,1,'__'], [24,1,'__'], [25,1,'__'], [26,1,'__'], [27,1,'__'], [28,1,'__'], [29,1,'__'],
//     [30,1,'__'], [31,1,'__'], [32,1,'__'], [33,1,'__'], [34,1,'__'], [35,1,'__'], [36,1,'__'], [37,1,'__'], [38,1,'__'], [39,1,'__'],
//     [40,1,'__'], [41,1,'__'], [42,1,'__'], [43,1,'__'], [44,1,'__'], [45,1,'__'], [46,1,'__'], [47,1,'__'], [48,1,'__'], [49,1,'__'],
//     [50,1,'__'], [51,1,'__'], [52,1,'__'], [53,1,'__'], [54,1,'__'], [55,1,'__'], [56,1,'__'], [57,1,'__'], [58,1,'__'], [59,1,'__'],
//     [60,1,'__'], [61,1,'__'], [62,1,'__'], [63,1,'__'], [64,1,'__'], [65,1,'__'], [66,1,'__'], [67,1,'__'], [68,1,'__'], [69,1,'__'],
//     [70,1,'__'], [71,1,'__'], [72,1,'__'], [73,1,'__'], [74,1,'__'], [75,1,'__'], [76,1,'__'], [77,1,'__'], [78,1,'__'], [79,1,'__'],
//     [80,1,'__'], [81,1,'__'], [82,1,'__'], [83,1,'__'], [84,1,'__'], [85,1,'__'], [86,1,'__'], [87,1,'__'], [88,1,'__'], [89,1,'__'],
//     [90,1,'__'], [91,1,'__'], [92,1,'__'], [93,1,'__'], [94,1,'__'], [95,1,'__'], [96,1,'__'], [97,1,'__'], [98,1,'__'], [99,1,'__'],

//         ]