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
            // TODO: Change description
            imported_data: {
                moodle_logs: false,
                forum_logs: false,
            },
            forum_file_name: "",
            forum_messages: [],
            forum: {
                forum_messages: [],
                messages: 0,
                users: 0,
                sentiments: {},
            },
            /**
             * Alert popup information
             * @param status: toggles alert
             * @param message: message for the alert
             * @param timeout: timer id for manual dismiss
             */
            alert: {
                status: false,
                message: "Error: Something went wrong",
                timeout: 0,
            },
            logs: [],
            summary: {
                total_interactions: 0,
                summary_types: null,
            },
            summary_cards: []
        }
    },
    mutations: {
        // Expand or shrink navigation bar
        changeNavigationBarStatus(){
            this.state.navigation_bar_status = !this.state.navigation_bar_status
        },
        // Call this method if data has been uploaded
        setImportedData(state, {which, file_name}) {
            // Determine the type of imported file: Moodle logs or Forum logs
            if ( !which ) {
                this.state.imported_data.moodle_logs = true;
                // TODO: Moodle logs file name
            } else {
                this.state.imported_data.forum_logs = true;
                this.state.forum_file_name = file_name
            }
        },
        // Store the imported forum log
        storeForumMessages(state, forum) {
            this.state.forum = forum
        },
        toggleAlert(state, message) {
            // Toggle alert
            this.state.alert.status = !this.state.alert.status;
            this.state.alert.message = message;
        },
        // Store computed summary data
        saveSummaryTypes(state, summary) {
            this.state.summary.total_interactions = summary.total_interactions;
            this.state.summary.summary_types = summary.summary_types;
        },
        // Store computed logs
        saveLogs(state, logs) {
            this.state.logs = logs;
        },
        saveSummaryCard(state, { summaryID, summary }) {
            this.state.summary_cards[summaryID] = summary;
        }
    }
});

export default store;