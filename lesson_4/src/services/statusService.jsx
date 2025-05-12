export const STATUS_TODO = 0
export const STATUS_IN_PROGRESS = 1
export const STATUS_DONE = 2
export const STATUS_ARCHIVED = 3
/* export const STATUS_TRASH = 4 */


export const STATUS_SEQUENCE = [STATUS_TODO, STATUS_IN_PROGRESS, STATUS_DONE, STATUS_ARCHIVED, /*STATUS_TRASH*/]
export const VIEW_SEQUENCE = [STATUS_TODO, STATUS_IN_PROGRESS, STATUS_DONE, /*STATUS_ARCHIVED, STATUS_TRASH*/]
export const ALLOWED_START_STATUSES = {
    [STATUS_TODO]: `To Do`, 
    [STATUS_IN_PROGRESS]: `In Progress`, 
    [STATUS_DONE]: `Done`
}
export const STATUS_NAMES = {
    ...ALLOWED_START_STATUSES,
    [STATUS_ARCHIVED]: `Archive`,
    /*[STATUS_TRASH]: `Trash`*/
}

export const getNextStatus = (currentStatus) => {
    if (currentStatus == STATUS_SEQUENCE.length - 1){
        return currentStatus
    }
    return STATUS_SEQUENCE[currentStatus + 1]
}

export const getPrevStatus = (currentStatus) => {
    if (currentStatus == 0){
        return currentStatus
    }
    return STATUS_SEQUENCE[currentStatus - 1]
}


