import { jobInfo } from "./interfaces";

const uiList = document.querySelector("#job-list") as HTMLUListElement;
const template = document.querySelector("template") as HTMLTemplateElement;

export function updateUI(dataArr: []) {
  dataArr.forEach((item: jobInfo) => {
    // console.log(item);
    const clone = template.content.cloneNode(true) as HTMLTemplateElement;

    // company logo
    const companyLogo = clone.querySelector(
      "#company-logo"
    ) as HTMLImageElement;
    companyLogo.src = item.logo;

    // company title
    const companyTitle = clone.querySelector(
      "#compnay-title"
    ) as HTMLParagraphElement;
    companyTitle.textContent = item.company;

    // job title
    const jobTitle = clone.querySelector("#job-title") as HTMLHeadElement;
    jobTitle.textContent = item.position;

    // postedAt
    const postedAt = clone.querySelector("#postedAt") as HTMLParagraphElement;
    postedAt.textContent = item.postedAt;

    // contract
    const contract = clone.querySelector("#contract") as HTMLParagraphElement;
    contract.textContent = item.contract;

    // location
    const location = clone.querySelector("#location") as HTMLParagraphElement;
    location.textContent = item.location;

    // job-new-state
    const jobNewState = clone.querySelector(
      "#job-new-state"
    ) as HTMLParagraphElement;
    jobNewState.style.display = `${item.featured ? "block" : "none"}`;

    // job-featured-state
    const jobFeaturedState = clone.querySelector(
      "#job-featured-state"
    ) as HTMLParagraphElement;
    jobFeaturedState.style.display = `${item.featured ? "block" : "none"}`;

    // role, level, languages, tools
    const filters = clone.querySelector("#filters") as HTMLDivElement;

    const filtersArr: object[] = [
      { role: item.role },
      { level: item.level },
      { languages: item.languages },
      { tools: item.tools },
    ];
    console.log(filtersArr);

    filtersArr.forEach((item: object) => {
      const spanEl = document.createElement("span") as HTMLSpanElement;
      const key: string = Object.keys(item)[0];
      spanEl.textContent = item[key];
      spanEl.setAttribute(`data-${key}`, item[key]);
      spanEl.classList.add("filter-item");
      filters.appendChild(spanEl);
    });

    uiList.appendChild(clone);
  });
}

function filterUI() {}
