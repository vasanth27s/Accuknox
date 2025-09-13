import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { activeTabState, categoryWidgetsState, showAddWidgetScreen, tabsState } from '../atoms/dashboardAtom'
import { useRecoilState } from 'recoil'
import Button from './Button'
import { permanentData } from '../atoms/dataAtom'

let modifiedCategory = "";

const AddWidget = () => {
  const [initialData, setInitialData] = useRecoilState(permanentData);
  const [show, setShow] = useRecoilState(showAddWidgetScreen);
  const [activeTab, setActiveTab] = useRecoilState(activeTabState);
  const [tabs] = useRecoilState(tabsState);
  const [categoryWidgets, setCategoryWidgets] = useRecoilState(categoryWidgetsState);

  useEffect(() => {
    setCategoryWidgets(getCategoryWidgets(activeTab));
  }, [activeTab]);

  const getCategoryWidgets = (categoryName) => {
    const searchCategory = initialData.categories.find(
      (item) => item.category === categoryName
    );
    modifiedCategory = categoryName;
    return searchCategory ? searchCategory.widgets : [];
  };

  const onTabClickHandler = (tabName) => {
    setActiveTab(tabName);
    const widgets = getCategoryWidgets(tabName);
    setCategoryWidgets(widgets);
  };

  const handleCancel = () => {
    setShow(false);
  };

  const handleSubmit = () => {
    if (!modifiedCategory) {
      setShow(false);
      return;
    }
    const tempData = JSON.parse(JSON.stringify(initialData));
    const category = tempData.categories.find(
      (item) => item.category === modifiedCategory
    );
    if (category) {
      category.widgets = [...categoryWidgets];
    }
    setInitialData(tempData);
    setShow(false);
  };

  const handleCheckboxToggle = (index) => {
    const updatedWidgets = [...categoryWidgets];
    updatedWidgets[index].isChecked = !updatedWidgets[index].isChecked;
    setCategoryWidgets(updatedWidgets);
  };

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-[40vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
        show ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Header */}
      <div className="flex justify-between bg-indigo-900 text-white font-semibold text-xl p-3">
        <h3>Add Widget</h3>
        <FontAwesomeIcon
          icon={faX}
          className="cursor-pointer hover:scale-125 transition-all"
          onClick={() => setShow(false)}
        />
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col h-[calc(100%-64px)] overflow-y-auto">
        <h4 className="mb-4">
          Personalise your dashboard by adding the following widget
        </h4>

        {/* Tabs */}
        <div className="flex gap-4 border-b mb-4">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`p-3 cursor-pointer ${
                activeTab === tab
                  ? 'border-b-4 border-indigo-900 font-semibold'
                  : 'text-gray-600'
              }`}
              onClick={() => onTabClickHandler(tab)}
            >
              {tab}
            </div>
          ))}
        </div>

        <div className="flex flex-col">
          {categoryWidgets.map((item, index) => (
            <div
              className="flex items-center border-2 border-gray-300 rounded-lg p-3 m-2"
              key={index}
            >
              <input
                type="checkbox"
                className="w-6 h-6 mr-3"
                checked={item.isChecked}
                onChange={() => handleCheckboxToggle(index)}
              />
              <div>{item.widgetName}</div>
            </div>
          ))}
        </div>

<div className="flex justify-end gap-4 mt-6">
  <Button
    text="Cancel"
    onClickHandler={handleCancel}
    className="px-6 py-2 bg-white text-black border-2 border-black hover:bg-gray-100"
  />
  <Button
    text="Confirm"
    onClickHandler={handleSubmit}
    className="px-6 py-2 bg-indigo-900 text-white border-2 border-indigo-900 hover:bg-indigo-800"
  />
</div>

      </div>
    </div>
  );
};

export default AddWidget;
