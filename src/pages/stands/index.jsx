import React, { Component, Fragment, Suspense } from "react";
import RouterViews from 'router/RouterViews';
import Loading from "components/Skeleton";


// const MyHeader = React.lazy(() => import("components/stands/MyHeader"));
const MyHeader = React.lazy(() => import("components/MyHeader"));
const MyFooter = React.lazy(() => import("pages/MyFooter"));

export default class RootHome extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    const { child, location } = this.props;
    return (
      <Suspense fallback={<Loading />} >
        <MyHeader routeName={location.pathname} allNone='stand' />
        <RouterViews routes={child} />
        <MyFooter routeName={this.props.location.pathname} />
      </Suspense>
    );
  }
}
