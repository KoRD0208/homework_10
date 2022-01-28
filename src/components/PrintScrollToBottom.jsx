import React, {useEffect} from "react"

function PrintScrollToBottom(props) {

  useEffect(() => {
    scroll()
  }, []);

  useEffect((isScrolledUp) => {
    if (!isScrolledUp) scroll()
  })

  function getSnapshotBeforeUpdate() {
    const {clientHeight, scrollTop, scrollHeight} = document.documentElement
    return clientHeight + scrollTop < scrollHeight
  }
  function scroll() {
    window.scrollTo(0, document.documentElement.scrollHeight)
  }

    return props.children
}

export default PrintScrollToBottom
