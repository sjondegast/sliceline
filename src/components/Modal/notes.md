#notes modal

- position absoluut vs fixed
- classes: .modal .modal-header .modal-body .modal-footer
- className: use: ABEM naming conventions
- all generic styling keep it stupid simple
- css grid, flexbox > container with grid or flex property
  <Container flex children >{children}</Container>

- prop: flex or grid -> children > child = item child type=grid or flex.item

```javascript
Container = {
	flex: false, //boolean
	grid: true, //boolean
	className: [], //array,
	children: [] //array
};
```
