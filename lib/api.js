export async function getTeaser() {
    return fetch('https://api.juricamigac.from.hr/v1/oneweb/teaser').then(res => res.json());
}

export async function getExperiences() {
    return fetch('https://api.juricamigac.from.hr/v1/oneweb/experiences').then(res => res.json());
}

export async function getProjects() {
    return fetch('https://api.juricamigac.from.hr/v1/oneweb/projects').then(res => res.json());
}

export async function getExpertises() {
    return fetch('https://api.juricamigac.from.hr/v1/oneweb/expertises').then(res => res.json());
}

export async function getSocialMedia() {
    return fetch('https://api.juricamigac.from.hr/v1/oneweb/footer')
        .then(res => res.json())
        .then(response => response.footer).then(footer => footer.shareOnSocialMedia)
        .then(shareOnSocialMedia => shareOnSocialMedia.socialMediaLinksCollection)
        .then(socialMediaCollection => socialMediaCollection.items);
}