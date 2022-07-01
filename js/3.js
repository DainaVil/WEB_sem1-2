var field = ""
for (var i = 0; i < 8; i++)
{
  for (var j = 0; j < 8; j++)
    if ((i + j + 1) % 2 === 0) 
      field += " "
    else
      field += "#"
  field += "\n"
}
console.log(field)