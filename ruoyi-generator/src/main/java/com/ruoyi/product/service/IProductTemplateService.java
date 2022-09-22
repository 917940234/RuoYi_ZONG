package com.ruoyi.product.service;

import java.util.List;
import com.ruoyi.product.domain.ProductTemplate;

/**
 * 生产数据监测Service接口
 * 
 * @author zongyoucheng
 * @date 2022-09-22
 */
public interface IProductTemplateService 
{
    /**
     * 查询生产数据监测
     * 
     * @param productId 生产数据监测主键
     * @return 生产数据监测
     */
    public ProductTemplate selectProductTemplateByProductId(Long productId);

    /**
     * 查询生产数据监测列表
     * 
     * @param productTemplate 生产数据监测
     * @return 生产数据监测集合
     */
    public List<ProductTemplate> selectProductTemplateList(ProductTemplate productTemplate);

    /**
     * 新增生产数据监测
     * 
     * @param productTemplate 生产数据监测
     * @return 结果
     */
    public int insertProductTemplate(ProductTemplate productTemplate);

    /**
     * 修改生产数据监测
     * 
     * @param productTemplate 生产数据监测
     * @return 结果
     */
    public int updateProductTemplate(ProductTemplate productTemplate);

    /**
     * 批量删除生产数据监测
     * 
     * @param productIds 需要删除的生产数据监测主键集合
     * @return 结果
     */
    public int deleteProductTemplateByProductIds(String productIds);

    /**
     * 删除生产数据监测信息
     * 
     * @param productId 生产数据监测主键
     * @return 结果
     */
    public int deleteProductTemplateByProductId(Long productId);
}
