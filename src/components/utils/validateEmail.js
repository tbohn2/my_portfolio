// Function that takes in e-mail and compares it to regex
export function validateEmail(email) {
    const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailExp.test(email);
}