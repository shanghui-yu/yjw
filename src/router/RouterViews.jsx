import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
const NotFound = React.lazy(() => import("components/NotFound"));

/***
 *  routes:Array<Object> map生成路由组件的items
 *  如果是二级路由，将会将 children 传递给props 
 *  二级路由 : <RouterViews routes={this.props.child} />
 */

function RouterViews(props) {
  //map循环的数据源
  let { routes } = props;
  //非重定向的数据过滤出来
  let routerArr = routes.filter(item => !item.redirect);
  //重定向的数据
  let redirectArr =
    routes &&
    routes
      .filter(item => item.redirect)
      .map((item, index) => (
        <Redirect key={index} from={item.path} to={item.redirect} />
      ));
  return (
    <Switch>
      {routerArr &&
        routerArr
          .map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                exact={item.exact ? true : false}
                render={props => {
                  /*注意这里传props里面才能进行下面的history使用,child是传的二级路由的*/
                  return <item.component {...props} child={item.children} />;
                }}
              />
            );
          })
          .concat(redirectArr) //将其合并
      }
      <Route component={NotFound} />
    </Switch>
  );
}

export default RouterViews;
