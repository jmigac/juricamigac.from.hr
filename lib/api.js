export async function getTeaser() {
    return fetch('https://api.juricamigac.from.hr/v1/oneweb/teaser',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
           next: {
                tags: ["teaser"]
           }
        }
    ).then(res => res.json());
}

export async function getExperiences() {
    return fetch('https://api.juricamigac.from.hr/v1/oneweb/experiences',
    {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            next: {
                tags: ["experiences"]
            }
        }
    ).then(res => res.json());
}

export async function getProjects() {
    return fetch('https://api.juricamigac.from.hr/v1/oneweb/projects',
    {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            next: {
                tags: ["projects"]
            }
    }).then(res => res.json());
}

export async function getExpertises() {
    return fetch('https://api.juricamigac.from.hr/v1/oneweb/expertises',
    {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            next: {
                tags: ["expertises"]
            }
        }
    ).then(res => res.json());
}

export async function getSocialMedia() {
    return fetch('https://api.juricamigac.from.hr/v1/oneweb/footer',
    {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            next: {
                tags: ["socialMedia"]
            }
        })
        .then(res => res.json())
        .then(response => response.footer).then(footer => footer.shareOnSocialMedia)
        .then(shareOnSocialMedia => shareOnSocialMedia.socialMediaLinksCollection)
        .then(socialMediaCollection => socialMediaCollection.items);
}