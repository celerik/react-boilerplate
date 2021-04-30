// @scripts
import { HIDE_ALERT_NOTIFICATION, SHOW_ALERT_NOTIFICATION } from '../../actions';
import { alertNotificationReducer } from '../../reducers/alert-notification';
import { config } from '../../config';
import { constants } from '../../core';

test('alertNotificationReducer: SHOW_ALERT_NOTIFICATION', () => {
    const action = {
        type: SHOW_ALERT_NOTIFICATION,
        payload: {
            title: 'INFO',
            msg: 'It is a info message',
            type: constants.notificationType.INFO
        }
    };
    const newState = alertNotificationReducer(config.initialState.alertNotification, action);
    const expectedState = {
        isVisible: true,
        title: action.payload.title,
        msg: action.payload.msg,
        type: action.payload.type
    };
    expect(newState).toEqual(expectedState);
});

test('alertNotificationReducer: HIDE_ALERT_NOTIFICATION', () => {
    const initialState = {
        isVisible: true,
        title: 'Title',
        msg: 'It is a message'
    };
    const action = {
        type: HIDE_ALERT_NOTIFICATION
    };
    const newState = alertNotificationReducer(initialState, action);
    const expectedState = {
        isVisible: false,
        title: null,
        msg: null,
        type: null
    };
    expect(newState).toEqual(expectedState);
});

test('alertNotificationReducer: DEFAULT', () => {
    const initialState = {
        isVisible: true,
        title: 'Title',
        msg: 'The email was sent',
        type: constants.notificationType.INFO
    };
    const action = {
        type: 'UNLISTENED_ACTION'
    };
    const newState = alertNotificationReducer(initialState, action);
    expect(newState).toEqual(initialState);
});
