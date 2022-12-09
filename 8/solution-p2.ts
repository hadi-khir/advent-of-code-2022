const map = [  [3, 0, 3, 7, 3],
  [2, 5, 5, 1, 2],
  [6, 5, 3, 3, 3],
  [3, 3, 5, 4, 9],
  [3, 5, 3, 9, 0]
];

const bestScenicScore = findBestTree(map);

console.log(bestScenicScore); // Output: 8

function findBestTree(map: number[][]): number {
    // Keep track of the best scenic score found so far
    let bestScenicScore = 0;
  
    // Loop through each tree in the map
    for (let y = 0; y < map.length; y++) {
      for (let x = 0; x < map[y].length; x++) {
        // Calculate the scenic score for this tree
        const scenicScore = calculateScenicScore(map, x, y);
  
        // Update the best scenic score if this tree has a higher score
        bestScenicScore = Math.max(bestScenicScore, scenicScore);
      }
    }
  
    return bestScenicScore;
  }
  
  function calculateScenicScore(map: number[][], x: number, y: number): number {
    // Find the height of the tree at this location
    const height = map[y][x];
  
    // Calculate the viewing distance in each direction
    let up = countTreesInDirection(map, x, y, 0, -1, height);
    let down = countTreesInDirection(map, x, y, 0, 1, height);
    let left = countTreesInDirection(map, x, y, -1, 0, height);
    let right = countTreesInDirection(map, x, y, 1, 0, height);
  
    // Return the scenic score for this tree
    if (up === 0) {
        up = 1;
    }
    if (down === 0) {
        down = 1;
    }
    if (left === 0) {
        left = 1;
    }
    if (right === 0) {
        right = 1;
    }
    
    return up * down * left * right;
  }
  
  function countTreesInDirection(
    map: number[][],
    x: number,
    y: number,
    dx: number,
    dy: number,
    height: number
  ): number {
    // Keep track of the number of trees seen
    let count = 0;
  
    // Keep moving in the specified direction until we reach the edge of the map or a tree that is the same height or taller than the current tree
    while (
      y >= 0 &&
      y < map.length &&
      x >= 0 &&
      x < map[y].length &&
      map[y][x] <= height
    ) {
      // Update the count if we see a tree
      if (map[y][x] === height) count++;
  
      // Move to the next position in the specified direction
      x += dx;
      y += dy;
    }
  
    return count;
  }