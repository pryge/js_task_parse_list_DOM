'use strict';

document.addEventListener('DOMContentLoaded', function () {
  function sortList() {
    const list = document.querySelector('ul');
    const items = Array.from(list.querySelectorAll('li'));

    function getSalaryNumbers(salary) {
      return Number(salary.replace(/[$,]/g, ''));
    }

    items.sort(
      (a, b) =>
        getSalaryNumbers(b.dataset.salary) - getSalaryNumbers(a.dataset.salary),
    );

    items.forEach((item) => list.appendChild(item));
  }

  sortList();
});
