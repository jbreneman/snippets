export const keepInRange = (number, min, max) => {
    return Math.min(Math.max(parseInt(number), min), max);
};

export const correctAngles = (angle) => {
    angle = Math.abs(angle);

    if (parseFloat(angle) > parseFloat(157.5) && parseFloat(angle) < parseFloat(180)) {
        return true;
    }

    if (parseFloat(angle) < parseFloat(22.5) && parseFloat(angle) > parseFloat(-22.5)) {
        return true;
    }

    return false;
};

export const checkVelocity = (velocity) => {
    // Force a move if they're scrolling violently. :)
    if (parseFloat(velocity) < parseFloat(-0.2)) {
        return 1;
    }

    if (parseFloat(velocity) > parseFloat(0.2)) {
        return -1;
    }

    return 0;
};