const uiList = document.querySelector("#job-list");
const template = document.querySelector("template");
export function updateUI(dataArr) {
    dataArr.forEach((item) => {
        // console.log(item);
        const clone = template.content.cloneNode(true);
        // company logo
        const companyLogo = clone.querySelector("#company-logo");
        companyLogo.src = item.logo;
        // company title
        const companyTitle = clone.querySelector("#compnay-title");
        companyTitle.textContent = item.company;
        // job title
        const jobTitle = clone.querySelector("#job-title");
        jobTitle.textContent = item.position;
        // postedAt
        const postedAt = clone.querySelector("#postedAt");
        postedAt.textContent = item.postedAt;
        // contract
        const contract = clone.querySelector("#contract");
        contract.textContent = item.contract;
        // location
        const location = clone.querySelector("#location");
        location.textContent = item.location;
        // job-new-state
        const jobNewState = clone.querySelector("#job-new-state");
        jobNewState.style.display = `${item.featured ? "block" : "none"}`;
        // job-featured-state
        const jobFeaturedState = clone.querySelector("#job-featured-state");
        jobFeaturedState.style.display = `${item.featured ? "block" : "none"}`;
        // role, level, languages, tools
        const filters = clone.querySelector("#filters");
        const filtersArr = [
            { role: item.role },
            { level: item.level },
            { languages: item.languages },
            { tools: item.tools },
        ];
        console.log(filtersArr);
        filtersArr.forEach((item) => {
            const spanEl = document.createElement("span");
            const key = Object.keys(item)[0];
            spanEl.textContent = item[key];
            spanEl.setAttribute(`data-${key}`, item[key]);
            spanEl.classList.add("filter-item");
            filters.appendChild(spanEl);
        });
        uiList.appendChild(clone);
    });
}
function filterUI() { }
