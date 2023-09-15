const Pagination = {
  allItems: [],
  page: 0,
  pageSize: 0,
  pageItems: [],
  init(arr, size) {
    this.pageSize = size;

    let currentPage = [];

    arr.forEach((element, index) => {
      if (index !== 0 && index % size === 0) {
        this.allItems = [...this.allItems, currentPage];
        currentPage = [];
      }

      currentPage = [...currentPage, element];
    });

    if (currentPage.length > 0) {
      this.allItems = [...this.allItems, currentPage];
      currentPage = [];
    }

    this.pageItems = this.allItems[0];
  },

  getPageItems() {
    console.log(this.pageItems);
  },

  firstPage() {
    this.page = 0;
    this.pageItems = this.allItems[this.page];
    console.log(`go to ${this.page} page`);
  },

  lastPage() {
    this.page = this.allItems.length - 1;
    this.pageItems = this.allItems[this.page];
    console.log(`go to ${this.page} page`);
  },

  prevPage() {
    this.page--;
    this.pageItems = this.allItems[this.page];
    console.log(`go to prev page`);

    return this;
  },

  nextPage() {
    this.page++;
    this.pageItems = this.allItems[this.page];
    console.log(`go to next page`);

    return this;
  },

  goToPage(page) {
    this.page = page;
    this.pageItems = this.allItems[this.page];
    console.log(`go to ${page} page`);
  },
};

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
Pagination.init(alphabetArray, 4);

Pagination.getPageItems(); // ["a", "b", "c", "d"]
Pagination.nextPage(); // add the current page by one

Pagination.getPageItems(); // ["e", "f", "g", "h"]

Pagination.nextPage().nextPage(); // the ability to call chainable

Pagination.goToPage(5); // current page must be set to 3
