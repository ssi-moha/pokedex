export interface ThunkRequestAction<EventType> {
    type: EventType;
}

export interface ThunkFailureAction<EventType> {
    type: EventType;
    payload: Error;
}

export interface ThunkSuccessAction<EventType, Payload> {
    type: EventType;
    payload: Payload;
}