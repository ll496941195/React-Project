/**
 * @file search/Home.js
 * @author fengwencong
 */

import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'dva';
import { withRouter, routerRedux } from 'dva/router';
// import { autobind } from 'core-decorators';
// import _ from 'lodash';

import SearchBar from '../../components/search/SearchBar';
import homeStyle from './searchHome.less';

const getGloabInfoQueryFunc = loading => query => ({
  type: 'globalData/getInfoQuery',
  payload: query || {},
  loading,
});

const mapStateToProps = state => ({
  globalLoading: state.activity.global,
  empInforData: state.globalData.empInforData,
});

const mapDispatchToProps = {
  push: routerRedux.push,
  replace: routerRedux.replace,
  getGloabInfoFunc: getGloabInfoQueryFunc(true),
  clearGlobalStateFunc: query => ({// 清空global的state
    type: 'globalData/clearGlobalState',
    payload: query || null,
  }),
  clearStateFunc: query => ({// 清空state
    type: 'search/clearState',
    payload: query || null,
  }),
};

@connect(mapStateToProps, mapDispatchToProps)
// 将react-router 的 history,location,match 三个对象传入。
@withRouter
export default class SearchHome extends PureComponent {
  static propTypes = {
    replace: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
    globalLoading: PropTypes.bool,
    location: PropTypes.object,
    getGloabInfoFunc: PropTypes.func.isRequired,
    clearGlobalStateFunc: PropTypes.func.isRequired,
    clearStateFunc: PropTypes.func.isRequired,
    empInforData: PropTypes.object,
  }

  static defaultProps = {
    globalLoading: false,
    location: {},
    empInforData: {},
  }

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentWillMount() {
    const { location: { query } } = this.props;
    this.props.clearStateFunc();
    if (query.empId) {
      this.props.clearGlobalStateFunc();
      this.props.getGloabInfoFunc({
        id: null,
        userid: query.empId,
      });
    }
  }

  render() {
    const { replace, push, location, empInforData } = this.props;
    return (
      <section className={homeStyle.page_searchHome}>
        <SearchBar
          push={push}
          replace={replace}
          location={location}
          empInforData={empInforData}
        />
      </section>
    );
  }
}
