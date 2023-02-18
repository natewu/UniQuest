class EyeWearInformation:
    def __init__(self, sphereLeft,sphereRight,IPD,bridge,lens,temple) -> None:            
        self.SphereLeft = sphereLeft
        self.SphereRight = sphereRight
        self.IPD = IPD
        self.Bridge = bridge
        self.Lens = lens
        self.Temple = temple
        self.ListOfAll = [sphereLeft,sphereRight,IPD,bridge,lens,temple]

def SimilarityOfEyewear(EyeWear1 : EyeWearInformation, EyeWear2 : EyeWearInformation) -> float:
    distance = 0
    importance = [0.15, 0.15, 0.04, 0.02, 0.02, 0.02]
    for i in range(len(EyeWear1.ListOfAll)):
        distance += abs(EyeWear1.ListOfAll[i] - EyeWear2.ListOfAll[i]) * importance[i]
    return 1 / pow(2,distance)

def EyewearMatchesRequirement(Eyewear1 : EyeWearInformation, Eyewear2 : EyeWearInformation, MustMatch : "list[str]") -> bool:
    CatagoryToIndex = {"SphereLeft": 0, "SphereRight":1, "IPD":2,"Bridge":3,"Lens":4,"Temple":5}
    catagoriesIndex = []
    for catagory in MustMatch:
        catagoriesIndex.append(CatagoryToIndex.get(catagory))
    for i in catagoriesIndex:
        if Eyewear1.ListOfAll[i] != Eyewear2.ListOfAll[i]:
            return False
    return True
