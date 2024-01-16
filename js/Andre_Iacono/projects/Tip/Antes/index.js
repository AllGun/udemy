function update() {
  let bill = Number(document.getElementById("yourBill").value);
  let tipPercent = document.getElementById("tipInput").value;
  let split = document.getElementById("splitInput").value;

  console.log({ bill, tipPercent, split });

  let tipValue = (bill * tipPercent) / 100;
  let billTotal = bill + tipValue;
  let billEach = billTotal / split;

  console.log({ tipValue, billTotal, billEach });

  document.getElementById("tipPercent").innerHTML = `${tipPercent} %`;
  document.getElementById("tipValue").innerHTML = `R$ ${tipValue.toFixed(2)}`;
  document.getElementById("totalWithTip").innerHTML = `R$ ${billTotal.toFixed(
    2
  )}`;

  if (split == 1) {
    document.getElementById("splitValue").innerHTML = `${split} pessoa`;
  } else {
    document.getElementById("splitValue").innerHTML = `${split} pessoas`;
  }

  document.getElementById("billEach").innerHTML = `R$ ${billEach.toFixed(2)}`;
}
