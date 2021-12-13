const staircase = numberOfStairs => {
      for (let i = 1; i <= numberOfStairs; i++){        
          console.log(" ".repeat(numberOfStairs - i) + "#".repeat(i))
      }    
  }
  console.log(staircase(4))