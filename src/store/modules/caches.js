function setBooks(list, item) {
  let isUpdate = false;
  let newList = JSON.parse(JSON.stringify(list));
  let book = { ...item, readIndex: item.readIndex ?? 0 };
  for (let index = 0; index < newList.length; index++) {
    const element = newList[index];
    if (element.bookUrl === item.bookUrl) {
      newList[index] = book;
      isUpdate = true;
      break;
    }
  }

  if (!isUpdate) {
    newList.push(book);
  }
  return newList;
}

function deleteBooks(list, item) {
  let deleteIndex = -1;
  list.forEach((d, index) => {
    if (d.bookUrl === item.bookUrl) {
      deleteIndex = index;
      return false;
    }
  });
  if (deleteIndex !== -1) {
    list.splice(deleteIndex, 1);
  }

  return list;
}
const state = () => ({
  searchHistoryList:
    JSON.parse(localStorage.getItem("searchHistoryList")) ?? [], // 搜索记录
  readBooksList: JSON.parse(localStorage.getItem("ReadBooksList")) ?? [], //阅读过的书籍
  readingBook: JSON.parse(sessionStorage.getItem("readingBook")) ?? {}, //正在阅读的书籍
});
const getters = {
  searchHistoryList: (state) => state.searchHistoryList,
  readBooksList: (state) => state.readBooksList,
  readingBook: (state) => state.readingBook,
};
const mutations = {
  setSearchHistory(state, val) {
    if (state.searchHistoryList.includes(val)) {
      return false;
    }
    if (state.searchHistoryList.length >= 10) {
      state.searchHistoryList.splice(9, 1);
    }
    state.searchHistoryList.unshift(val);
    localStorage.setItem(
      "searchHistoryList",
      JSON.stringify(state.searchHistoryList)
    );
  },
  setBooksList(state, val) {
    state.readBooksList = setBooks(state.readBooksList, val);
    localStorage.setItem("ReadBooksList", JSON.stringify(state.readBooksList));
  },
  deleteReadBooks(state, val) {
    state.readBooksList = deleteBooks(state.readBooksList, val);
    localStorage.setItem("ReadBooksList", JSON.stringify(state.readBooksList));
  },
  setReadingBook(state, readingBook) {
    state.readingBook = readingBook;
    window.sessionStorage.setItem("readingBook", JSON.stringify(readingBook));
  },
};
const actions = {
  setSearchHistory({ commit }, val) {
    commit("setSearchHistory", val);
  },
  setBooksList({ commit }, val) {
    commit("setBooksList", val);
  },
  deleteReadBooks({ commit }, val) {
    commit("deleteReadBooks", val);
  },
  setReadingBook({ commit }, val) {
    commit("setReadingBook", val);
  },
};
export default { state, getters, mutations, actions };
