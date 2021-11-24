import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            /**
             * Navigation bar status
             * true:    Expanded
             * false:   Shrank
             */
            navigation_bar_status: false,
            /**
             * This value will determine where the navigation
             * header will redirect to:
             * If there's uploaded data Dashboard page is
             * rendered, otherwise Import Data page
             */
            imported_data: false,
            /**
             * Forum properties:
             * - forum_messages: List of processed messages
             * - total_users: Number of users
             */
            forum: null,
        }
    },
    mutations: {
        // Expand or shrink navigation bar
        changeNavigationBarStatus(){
            this.state.navigation_bar_status = !this.state.navigation_bar_status
        },
        // Call this method if data has been uploaded
        setImportedData() {
            this.state.imported_data = true
        },
        // Store the imported chat log
        storeForumMessages(state, forum) {
            this.state.forum = forum
        }
    }
});

export default store;