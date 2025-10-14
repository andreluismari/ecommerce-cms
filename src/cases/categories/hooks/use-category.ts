import { useMutation, useQueries, useQuery } from "@tanstack/react-query";
import { CategoryService } from "../services/category.service";
import type { CategoryDTO } from "../dtos/category.dto";


export function useCategories() {
    return useQuery<CategoryDTO[]>({
        queryKey: ['categories'],
        queryFn: CategoryService.list

    });
    
}

export function useCategory(id: string) {
    return useQuery<CategoryDTO>({
        queryKey: ['caregory', id],
        queryFn: () => CategoryService.getById(id),
        enabled: !!id //-> or Bollean(id)
    });

}

export function useCreateCategory(){
    return useMutation<CategoryDTO, Error, Omit<CategoryDTO, 'id'>> ({
        mutationFn: (category: Omit<CategoryDTO 'id'>) => CategoryService.create(category)
    });
}



export function userUpdateCategory(){
    return useMutation<CategoryDTO, Error,, 'id'>> ({
        mutationFn: (category: Omit<CategoryDTO 'id'>) => CategoryService.create(category)
    });
}