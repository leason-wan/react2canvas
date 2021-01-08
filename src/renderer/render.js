import ReactReconciler from "react-reconciler";
import { createElement, getHostContextNode } from "./createElement";

const childHostContext = {};

const hostConfig = {
  now: Date.now, // 时间戳用于区分渲染桢
  getRootHostContext: (instence) => {
    return getHostContextNode(instence);
  },
  getChildHostContext: () => {
    return childHostContext;
  },
  shouldSetTextContent: (type, props) => {
    return false;
  },
  supportsMutation: true,
  // React.createElement
  createInstance: (
    type,
    newProps,
    rootContainerInstance,
    _currentHostContext,
    workInProgress
  ) => {
    createElement(type, newProps);
    return rootContainerInstance;
  },
  createTextInstance: (text) => {},
  // componentDidMount
  appendInitialChild: (parent, child) => {},
  appendChild(parent, child) {},
  appendAllChildren() {},
  finalizeInitialChildren: (domElement, type, props) => {},
  appendChildToContainer: (parent, child) => {},
  prepareUpdate(domElement, oldProps, newProps) {
    return true;
  },
  // componentsDidUpdate
  prepareForCommit: () => {},
  resetAfterCommit: () => {},
  commitUpdate(canvasElement, updatePayload, type, oldProps, newProps) {},
  commitTextUpdate(textInstance, oldText, newText) {},
  // componentWillUnmount
  removeChild(parentInstance, child) {},
};

const ReactReconcilerInst = ReactReconciler(hostConfig);

export const render = (reactElement, container, callback) => {
  // 全局渲染器的单例
  if (!container._rootContainer) {
    container._rootContainer = ReactReconcilerInst.createContainer(
      container,
      false
    );
  }

  // update the root Container
  ReactReconcilerInst.updateContainer(
    reactElement,
    container._rootContainer,
    null,
    callback
  );
};
