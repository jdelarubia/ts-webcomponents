const _NUMBERID = "niceNumber";
const _INCID = "inc";
const _INCID10 = "inc10";
const _DECID = "dec";
const _DECID10 = "dec10";
const styles = `<style>@import "css/nice-number.css";</style>`;
const component = `
<button id="${_DECID10}">&minus;10</button><button id="${_DECID}">&minus;</button><input
type="number"
name=""
id="${_NUMBERID}"
min="0"
value="0"
max="100"
/><button id="${_INCID}">&plus;</button><button id="${_INCID10}">&plus;10</button>
`;
const template = document.createElement("template");
template.innerHTML = styles + component;
class NiceNumberComponent extends HTMLElement {
    shadow;
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    } //.
    connectedCallback() {
        this.render();
    } //.
    getInputElement() {
        return this.shadow.getElementById(_NUMBERID);
    } //.
    inc() {
        const input = this.getInputElement();
        input.value = (parseInt(input.value) + 1).toString();
        this.normalize();
    } //.
    inc10() {
        const input = this.getInputElement();
        input.value = (parseInt(input.value) + 10).toString();
        this.normalize();
    } //.
    dec() {
        const input = this.getInputElement();
        input.value = (parseInt(input.value) - 1).toString();
        this.normalize();
    } //.
    dec10() {
        const input = this.getInputElement();
        input.value = (parseInt(input.value) - 10).toString();
        this.normalize();
    } //.
    normalize() {
        const input = this.getInputElement();
        const val = parseInt(input.value);
        const min = parseInt(input.min);
        const max = parseInt(input.max);
        if (val >= max) {
            input.value = max.toString();
            return false;
        }
        if (val <= min) {
            input.value = min.toString();
            return false;
        }
        return true;
    } //.
    render() {
        this.shadow.innerHTML = "";
        this.shadow.appendChild(template.content.cloneNode(true));
        // listen to button "click"s
        this.shadow
            .getElementById(_INCID)
            ?.addEventListener("click", this.inc.bind(this));
        this.shadow
            .getElementById(_INCID10)
            ?.addEventListener("click", this.inc10.bind(this));
        this.shadow
            .getElementById(_DECID)
            ?.addEventListener("click", this.dec.bind(this));
        this.shadow
            .getElementById(_DECID10)
            ?.addEventListener("click", this.dec10.bind(this));
        // listen to input "change" events
        this.shadow
            .getElementById(_NUMBERID)
            ?.addEventListener("change", this.normalize.bind(this));
    } //.
} //. NiceNumberComponent
window.customElements.define("nice-number", NiceNumberComponent);
export { NiceNumberComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmljZU51bWJlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk5pY2VOdW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxTQUFTLEdBQUcsWUFBWSxDQUFDO0FBQy9CLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQztBQUNyQixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUM7QUFDekIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ3JCLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQztBQUN6QixNQUFNLE1BQU0sR0FBRywrQ0FBK0MsQ0FBQztBQUUvRCxNQUFNLFNBQVMsR0FBRztjQUNKLFFBQVEsbUNBQW1DLE1BQU07OztNQUd6RCxTQUFTOzs7O2dCQUlDLE1BQU0sZ0NBQWdDLFFBQVE7Q0FDN0QsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFcEQsUUFBUSxDQUFDLFNBQVMsR0FBRyxNQUFNLEdBQUcsU0FBUyxDQUFDO0FBRXhDLE1BQU0sbUJBQW9CLFNBQVEsV0FBVztJQUNqQyxNQUFNLENBQWE7SUFFM0I7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUMsQ0FBQyxHQUFHO0lBRUwsaUJBQWlCO1FBQ2IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUMsQ0FBQyxHQUFHO0lBRUcsZUFBZTtRQUNuQixPQUF5QixJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRSxDQUFDLENBQUMsR0FBRztJQUVMLEdBQUc7UUFDQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDckMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxHQUFHO0lBQ0wsS0FBSztRQUNELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNyQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0RCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQyxDQUFDLEdBQUc7SUFFTCxHQUFHO1FBQ0MsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3JDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDLENBQUMsR0FBRztJQUNMLEtBQUs7UUFDRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDckMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdEQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxHQUFHO0lBRUwsU0FBUztRQUNMLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNyQyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNiLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzdCLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFDRCxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNiLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzdCLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDLENBQUMsR0FBRztJQUVMLE1BQU07UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUUxRCw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLE1BQU07YUFDTixjQUFjLENBQUMsTUFBTSxDQUFDO1lBQ3ZCLEVBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU07YUFDTixjQUFjLENBQUMsUUFBUSxDQUFDO1lBQ3pCLEVBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE1BQU07YUFDTixjQUFjLENBQUMsTUFBTSxDQUFDO1lBQ3ZCLEVBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU07YUFDTixjQUFjLENBQUMsUUFBUSxDQUFDO1lBQ3pCLEVBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkQsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxNQUFNO2FBQ04sY0FBYyxDQUFDLFNBQVMsQ0FBQztZQUMxQixFQUFFLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUMsQ0FBQyxHQUFHO0NBQ1IsQ0FBQyx1QkFBdUI7QUFFekIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDLENBQUM7QUFFakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLENBQUMifQ==