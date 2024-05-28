import type { PropsWithChildren } from "react";
import type { Store } from "redux";
import { Provider } from "react-redux";

const ReduxProvider = ({ store, children }: PropsWithChildren<{ store: Store<any, any, any> }>) => <Provider store={store}>{children}</Provider>;

export default ReduxProvider;
