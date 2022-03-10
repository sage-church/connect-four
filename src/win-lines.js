//Regarding indices: Index '0' represents left-most circle in bottom-most row. Index '1' 
//represents left-most circle in second-from-bottom row. Index '6' represents second-from-left circle in
//bottom-most row. Index '7' represents second-from-left circle in second-from-bottom row...and so on.

export const lines = [
    //Below notes count rows from bottom to top.  

    //winning combinations for first row
    [0, 6, 12, 18],
    [6, 12, 18, 24],
    [12, 18, 24, 30],
    [18, 24, 30, 36],
    //winning combinations for second row
    [1, 7, 13, 19],
    [7, 13, 19, 25],
    [13, 19, 25, 31],
    [19, 25, 31, 37],
    //winning combinations for third row
    [2, 8, 14, 20],
    [8, 14, 20, 26],
    [14, 20, 26, 32],
    [20, 26, 32, 38],
    //winning combinations for fourth row
    [3, 9, 15, 21],
    [9, 15, 21, 27],
    [15, 21, 27, 33],
    [21, 27, 33, 39],
    //winning combinations for fifth row
    [4, 10, 16, 22],
    [10, 16, 22, 28],
    [16, 22, 28, 34],
    [22, 28, 34, 40],
    //winning combinations for sixth row
    [5, 11, 17, 23],
    [11, 17, 23, 29],
    [17, 23, 29, 35],
    [23, 29, 35, 41],

    //Below notes count columns from left to right

    //winning combinations for first column
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    //winning combinations for second column
    [6, 7, 8, 9],
    [7, 8, 9, 10],
    [8, 9, 10, 11],
    //winning combinations for third column
    [12, 13, 14, 15],
    [13, 14, 15, 16],
    [14, 15, 16, 17],
    //winning combinations for fourth column
    [18, 19, 20, 21],
    [19, 20, 21, 22],
    [20, 21, 22, 23],
    //winning combinations for fifth column
    [24, 25, 26, 27],
    [25, 26, 27, 28],
    [26, 27, 28, 29],
    //winning combinations for sixth column
    [30, 31, 32, 33],
    [31, 32, 33, 34],
    [32, 33, 34, 35],
    //winning combinations for seventh column
    [36, 37, 38, 39],
    [37, 38, 39, 40],
    [38, 39, 40, 41],

    //Below arrays are for winning diagonal line combinations where the line runs from bottom-left

    //to top-right
    [2, 9, 16, 23],
    [1, 8, 15, 22],
    [8, 15, 22, 29],
    [0, 7, 14, 21],
    [7, 14, 21, 28],
    [14, 21, 28, 35],
    [6, 13, 20, 27],
    [13, 20, 27, 34],
    [20, 27, 34, 41],
    [12, 19, 26, 33], 
    [19, 26, 33, 40],
    [18, 25, 32, 39],

    //Below arrays are for winning diagonal line combinations where the line runs from bottom-right

    //to top-left
    [38, 33, 28, 23],
    [37, 32, 27, 22],
    [32, 27, 22, 17],
    [36, 31, 26, 21],
    [31, 26, 21, 16],
    [26, 21, 16, 11],
    [30, 25, 20, 15],
    [25, 20, 15, 10],
    [20, 15, 10, 5],
    [24, 19, 14, 9],
    [19, 14, 9, 4],
    [18, 13, 8, 3]
]