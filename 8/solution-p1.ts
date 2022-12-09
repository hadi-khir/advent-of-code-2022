

import * as fs from "fs";
const input = fs.readFileSync("input.txt", "utf8").split("\n");

function countVisibleTrees(grid: string[]): number {
  let count = 0;

  // iterate over each tree in the grid
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const height = grid[i][j];
      let visibleTop = false;
      let visibleBottom = false;
      let visibleRight = false;
      let visibleLeft = false;

      // check if the tree is visible from the left
      if (j === 0) {
        visibleLeft = true;
      } else {
        visibleLeft = true;
        for (let k = 0; k < j; k++) {
          if (grid[i][k] >= height) {
            visibleLeft = false;
            break;
          }
        }
      }

      // check if the tree is visible from the right
      if (j === grid[i].length - 1) {
        visibleRight = true;
      } else {
        visibleRight = true;
        for (let k = j + 1; k < grid[i].length; k++) {
          if (grid[i][k] >= height) {
            visibleRight = false;
            break;
          }
        }
      }

      // check if the tree is visible from the top
      if (i === 0) {
        visibleTop = true;
      } else {
        visibleTop = true;
        for (let k = 0; k < i; k++) {
          if (grid[k][j] >= height) {
            visibleTop = false;
            break;
          }
        }
      }

      // check if the tree is visible from the bottom
      if (i === grid.length - 1) {
        visibleBottom = true;
      } else {
        visibleBottom = true;
        for (let k = i + 1; k < grid.length; k++) {
          if (grid[k][j] >= height) {
            visibleBottom = false;
            break;
          }
        }
      }

      console.log(height);

      console.log("top:", visibleTop, "bottom", visibleBottom, "left:", visibleLeft, "right:", visibleRight)

      // if the tree is visible from any direction, increment the count
      if (visibleTop || visibleBottom || visibleLeft || visibleRight) {
        count++;
      }
    }
  }

  return count;
}

console.log(countVisibleTrees(input));