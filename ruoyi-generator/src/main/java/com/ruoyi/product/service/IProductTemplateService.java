package com.ruoyi.product.service;

import java.util.List;
import com.ruoyi.product.domain.ProductTemplate;

/**
 * 生产数据监控Service接口
 * 
 * @author zongyoucheng
 * @date 2022-09-23
 */
public interface IProductTemplateService 
{
    /**
     * 查询生产数据监控
     * 
     * @param productId 生产数据监控主键
     * @return 生产数据监控
     */
    public ProductTemplate selectProductTemplateByProductId(Long productId);

    /**
     * 查询生产数据监控列表
     * 
     * @param productTemplate 生产数据监控
     * @return 生产数据监控集合
     */
    public List<ProductTemplate> selectProductTemplateList(ProductTemplate productTemplate);

    /**
     * 新增生产数据监控
     * 
     * @param productTemplate 生产数据监控
     * @return 结果
     */
    public int insertProductTemplate(ProductTemplate productTemplate);

    /**
     * 修改生产数据监控
     * 
     * @param productTemplate 生产数据监控
     * @return 结果
     */
    public int updateProductTemplate(ProductTemplate productTemplate);

    /**
     * 批量删除生产数据监控
     * 
     * @param productIds 需要删除的生产数据监控主键集合
     * @return 结果
     */
    public int deleteProductTemplateByProductIds(String productIds);

    /**
     * 删除生产数据监控信息
     * 
     * @param productId 生产数据监控主键
     * @return 结果
     */
    public int deleteProductTemplateByProductId(Long productId);
}
