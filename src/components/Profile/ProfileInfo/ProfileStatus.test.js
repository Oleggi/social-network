import React from "react";
import { create } from "react-test-renderer";
import ProfileStatusForTesting from "./ProfileStatusForTesting.jsx";

describe ("Profile status component", () => {
 test("status from props shoud be displayed in the state", () => {
     const component = create(<ProfileStatusForTesting status={"Status for testing"} />);
     const instance = component.getInstance();
     expect(instance.state.statusData).toBe("Status for testing");
 })

 test("after creation <span> should be displayed", () => {
    const component = create(<ProfileStatusForTesting status={"Status for testing"} />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span).not.toBeNull();
})

test("after creation <span> should contain correct status", () => {
    const component = create(<ProfileStatusForTesting status={"Status for testing"} />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span.children[0]).toBe("Status for testing");
})

test("after creation <input> shouldn't be displayed", () => {
    const component = create(<ProfileStatusForTesting status={"Status for testing"} />);
    const root = component.root;
    expect(() => {
        return root.findByType("input");
    }).toThrowError();
})

test("<input> should be displayed in edit mode instead of </span>", () => {
    const component = create(<ProfileStatusForTesting status={"Status for testing"} />);
    const root = component.root;
    const span = root.findByType("span");
    span.props.onDoubleClick();
    const input = root.findByType("input");
    expect(input.props.value).toBe("Status for testing");
})

test("callback should be called", () => {
    const mockFn = jest.fn();
    const component = create(<ProfileStatusForTesting status={"Status for testing"} setUserStatus={mockFn} />);
    const instance = component.getInstance();
    instance.editModeOff();
    expect(mockFn.mock.calls.length).toBe(1);
})
})
