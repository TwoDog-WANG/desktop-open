import { createStore } from "vuex";

const stores = {
    state() {
        return {
            appList: {

            },
        }
    },
    mutations: {
        initLinkList(state, linkList) {
            state.appList = linkList;
        },
        addAppList(state, linkObj) {
            if(state.appList.hasOwnProperty(linkObj.name)) {
                state.appList[linkObj.name].push(linkObj.link);
            }
            else {
                state.appList[linkObj.name] = [];
                state.appList[linkObj.name].push(linkObj.link);
            }
            window.changeLinkList(JSON.stringify(state.appList, null, '\t'));
        },
        deleteLink(state, linkObj) {
            if(linkObj.index) {
                state.appList[linkObj.title].splice(linkObj.index, 1);
            }
            else {
                Reflect.deleteProperty(state.appList, linkObj.title);
            }
            window.changeLinkList(JSON.stringify(state.appList, null, '\t'));
        },
        moveLink(state, linkObj) {
            let link = state.appList[linkObj.title].splice(linkObj.index, 1)[0];
            if(state.appList.hasOwnProperty(linkObj.inputStr)) {
                state.appList[linkObj.inputStr].push(link);
            }
            else {
                state.appList[linkObj.inputStr] = [];
                state.appList[linkObj.inputStr].push(link);
            }
            window.changeLinkList(JSON.stringify(state.appList, null, '\t'));
        }
    }
}

const store = createStore(stores);

export default store