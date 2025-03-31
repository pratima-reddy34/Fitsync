function display(value)
{
document.getElementById('textarea').value+=value

}

function calculate()
{
var value = document.getElementById('textarea').value
var answer = eval(value)
document.getElementById('textarea').value=answer
}

function clr()
{
document.getElementById('textarea').value=''
}
function removeLastDigit() {
      const textarea = document.getElementById("textarea");
      let currentValue = textarea.value;
      // Remove the last character if there's any text
      if (currentValue.length > 0) {
        textarea.value = currentValue.slice(0, -1);
      }
    }
