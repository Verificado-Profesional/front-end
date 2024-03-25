export interface APISpaceXResponse {
    "@context":          string;
    "@type":             string[];
    dateCreated:         Date;
    datePublished:       Date;
    dateModified:        Date;
    mainEntityOfPage:    MainEntityOfPage;
    headline:            string;
    alternativeHeadline: string;
    description:         string;
    articleBody:         string;
    isAccessibleForFree: boolean;
    keywords:            string;
    citation:            Citation;
    url:                 string;
    image:               Image[];
    articleSection:      string[];
    author:              Author[];
    publisher:           Publisher;
    isPartOf:            IsPartOf;
    hasPart:             HasPart;
}

export interface Author {
    type:         string;
    name:         string;
    url:          string;
    image:        string;
    email:        string;
    jobTitle:     string;
    contactPoint: ContactPoint;
}

export interface ContactPoint {
    "@type":     string;
    contactType: string;
    email:       string;
}

export interface Citation {
    type: string;
    url:  string;
}

export interface HasPart {
    "@type":             string;
    isAccessibleForFree: boolean;
    cssSelector:         string;
}

export interface Image {
    "@context"?: string;
    "@type":     string;
    url:         string;
    height:      number;
    width:       number;
}

export interface IsPartOf {
    "@type": string[];
    name:    string;
}

export interface MainEntityOfPage {
    "@type": string;
    "@id":   string;
}

export interface Publisher {
    "@type": string;
    name:    string;
    url:     string;
    logo:    Image;
    sameAs:  string[];
}
