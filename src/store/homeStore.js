import { observable, action} from 'mobx';

class HomeStore {
    @observable homeNum = 0;
    
    @action addNum() {
        this.homeNum += 1;
    }

    @action lessNum() {
        this.homeNum -= 1;
    }
}


// let store = null;

// function getStore () {
//     if (!store) {
//         store = new HomeStore();
//     }
//     return store;
// }

export {
    HomeStore
};

