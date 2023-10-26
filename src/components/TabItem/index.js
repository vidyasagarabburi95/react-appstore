// Write your code here
import './index.css'

const TabItem = props => {
  const {tabs, changingTab, isActive} = props
  const {tabId, displayText} = tabs
  const changeTab = () => {
    changingTab(tabId)
  }
  const tabClsName = isActive ? 'tab-button-active' : 'btn'
  return (
    <li className="li-tab">
      <button type="button" onClick={changeTab} className={tabClsName}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
