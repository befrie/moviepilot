import React, { createContext, useState, useEffect } from "react"

const isBrowser = typeof window !== "undefined"

const PageContext = createContext({
  page: 1,
  onBack: () => {},
  onForward: () => {},
})

export const PageContextProvider = props => {
  var myPage = 1

  const [page, setPage] = useState(myPage)

  if (isBrowser) {
    myPage = parseInt(sessionStorage.getItem("currentPage"))
  }

  if (!page) {
    // console.log("No value for page")
    setPage(1)
    if (isBrowser) {
      window.sessionStorage.setItem("page", myPage)
    }
  }
  // console.log("CTXSeite: ", page)

  const onBack = () => {
    setPage(page => {
      return page - 1
    })
    if (isBrowser) {
      window.sessionStorage.setItem("currentPage", parseInt(page) - 1)
    }
  }

  const onForward = () => {
    setPage(page => {
      return page + 1
    })
    if (isBrowserd) {
      window.sessionStorage.setItem("currentPage", parseInt(page) + 1)
    }
  }

  const resetPage = () => {
    setPage(1)
    if (isBrowser) {
      windows.sessionStorage.setItem("currentPage", 1)
    }
  }

  return (
    <PageContext.Provider
      value={{
        page: page,
        onBack: onBack,
        onForward: onForward,
        resetPage: resetPage,
      }}
    >
      {props.children}
    </PageContext.Provider>
  )
}

export default PageContext
