import * as React from "react";
import "./styles.css";

export const RadioGroup = ({ onChange, selected, children }) => {
  const RadioOptions = React.Children.map(children, (child) => {
    /** ATTN
     * The first argument passed to the map function should be the >>>children<<< prop, and the second is a function that gets invoked in every child contained within the children property.
     * Recall that a children prop is a special prop all React components have and that it presents a special data structure, similar to arrays, where you can perform iterations.
     * However, they are not exactly instances of JavaScript arrays. That’s why to iterate over all siblings you should use the special React.children.map API provided by React.
     */
    return React.cloneElement(child, {
      onChange,
      checked: child.props.value === selected,
    });
    /**
     * onChange can be passed to each child (RadioOption) as it is and checked is the property the RadioOption uses to determine if the underlying radio input is selected.
     * Since RadioGroup receives a selected property, which is a string pointing to the value of the option that has been selected, checked will be only true for one of the options at any point in time. This is guaranteed by performing an equality check, comparing the RadioOption value prop with the selected value.
     */
  });
  return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
  /**
   * The RadioOption component now receives two new props implicitly, onChange and checked, that RadioGroup is injecting via children manipulation.
   * The value prop is already provided explicitly inside the App.js component and children represents the label text for the radio input.
   * You have to connect the props value, checked and onChange correctly. First, both value and checked props should be passed to the radio input as is. Then, you should use the onChange event from the radio input, retrieve the value property from the event target object and pass it to the onChange prop as the argument.
   */
  return (
    <div className="RadioOption">
      <input
        id={value}
        type="radio"
        name={value}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
